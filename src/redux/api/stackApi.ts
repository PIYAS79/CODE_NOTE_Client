import baseApi from "./baseApi";


const stackApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createStackReq: builder.mutation({
            query: ({ data }) => ({
                url: '/stack',
                method: 'POST',
                body: data
            }),
            transformResponse: (res: any) => {
                return res
            },
            invalidatesTags: ['stack']
        }),
        getStackSendReq: builder.query({
            query: ({ uid }) => ({
                url: `/stack/req/${uid}`,
                method: "GET"
            }),
            transformResponse: (res: any) => {
                return res.data;
            },
            providesTags: ['stack']
        }),
        cancelStackSendReq: builder.mutation({
            query: ({ sid }) => ({
                url: `/stack/${sid}`,
                method: "DELETE"
            }),
            transformResponse: (res: any) => {
                return res.data;
            },
            invalidatesTags: ['stack']
        }),
        receiveStackReq: builder.query({
            query: ({ uid }) => ({
                url: `/stack/ask/${uid}`,
                method: "GET"
            }),
            transformResponse: (res: any) => {
                return res.data;
            },
            providesTags: ['stack']
        }),
        stackReqDecision:builder.mutation({
            query: ({ status,sid }) => ({
                url: `stack/ask/${sid}`,
                method: "PATCH",
                body:{status}
            }),
            transformResponse: (res: any) => {
                return res.data;
            },
            invalidatesTags: ['stack']
        }),
    })
})

export const { useCreateStackReqMutation, useGetStackSendReqQuery, useCancelStackSendReqMutation,useReceiveStackReqQuery,useStackReqDecisionMutation } = stackApi;