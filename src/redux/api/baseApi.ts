import { BaseQueryApi, BaseQueryFn, DefinitionType, FetchArgs, createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { removeUser, setUser } from "../features/authSlice";
import { toast } from "sonner";


const baseQuery = fetchBaseQuery({
    baseUrl: 'https://code-note-backend.vercel.app/api/v1',
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth.token;
        if (token) {
            headers.set('authorization', token);
        }
        return headers;
    }
})



const customBaseQuery: BaseQueryFn<FetchArgs, BaseQueryApi, DefinitionType> = async (args, api, extraOptions): Promise<any> => {
    let res = await baseQuery(args, api, extraOptions) as any;
    // if status code is 404
    if (res?.error?.status === 404) {
        toast.error(res?.error?.data?.errorTitle, { position: 'top-center' })
    }
    // if there is any token related issue
    if (res?.error?.status === 401) {
        const result = await fetch('https://code-note-backend.vercel.app/api/v1/auth/refresh', {
            method: "GET",
            credentials: 'include',
        });
        const data = await result.json();
        if (data.data.AccessToken) {
            const user = (api.getState() as RootState).auth.user;
            const me = (api.getState() as RootState).auth.me;
            const _id = (api.getState() as RootState).auth._id;
            api.dispatch(setUser({ user, token: data.data.AccessToken, _id, me: me }))
            res = await baseQuery(args, api, extraOptions);
        } else {
            api.dispatch(removeUser());
        }
    }
    return res;
}



const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: customBaseQuery,
    tagTypes: ['codes', 'scode', 'user', 'timeline','me','updateCode','stack'],
    endpoints: () => ({})
})

export default baseApi;