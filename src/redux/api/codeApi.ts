import baseApi from "./baseApi";



const codeApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // create code api
        createCode: builder.mutation({
            query: (data) => ({
                url: '/code',
                method: 'POST',
                body: data
            })
        }),
        // get my codes api
        getMyAllCodes: builder.query({
            query: (user_id) => ({
                url: `/code/user/${user_id}`,
                method: 'GET',
            }),
            transformResponse: (res:any) => {
                return res.data.result 
            }
        })
    })
})


export const { useCreateCodeMutation, useGetMyAllCodesQuery } = codeApi;