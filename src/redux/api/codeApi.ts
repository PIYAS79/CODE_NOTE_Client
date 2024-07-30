import baseApi from "./baseApi";



const codeApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // create code api
        createCode: builder.mutation({
            query: (data) => ({
                url: '/code',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['codes']
        }),
        // get my codes api
        getMyAllCodes: builder.query({
            query: (user_id) => ({
                url: `/code/user/${user_id}`,
                method: 'GET',
            }),
            transformResponse: (res: any) => {
                return res.data.result
            },
            providesTags: ['codes']
        }),
        // get a single code
        getSingleCodes: builder.query({
            query: (cid) => ({
                url: `/code/${cid}`,
                method: 'GET',
            }),
            transformResponse: (res: any) => {
                return res.data
            },
            providesTags: (cid) => [{ type: 'scode', id: cid }, 'codes'],
        }),
        // update code api
        updateCode: builder.mutation({
            query: ({ data, cid }) => ({
                url: `code/${cid}`,
                method: 'PATCH',
                body: data
            }),
            invalidatesTags: ({ cid }) => [{ type: 'scode', id: cid }, 'codes', 'updateCode']
        }),
        // delete code api
        deleteCode: builder.mutation({
            query: (cid) => ({
                url: `code/${cid}`,
                method: 'DELETE',
            }),
            invalidatesTags: ({ cid }) => [{ type: 'scode', id: cid }, 'codes']
        }),
        getUserStarCodes: builder.query({
            query: ({ uid }) => ({
                url: `/code/star/${uid}`,
                method: "GET",
            }),
            providesTags: ['updateCode']
        })
    })
})


export const { useCreateCodeMutation, useGetMyAllCodesQuery, useUpdateCodeMutation, useGetSingleCodesQuery, useDeleteCodeMutation,useGetUserStarCodesQuery } = codeApi;