import baseApi from "./baseApi";


const stackApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // getStackSendReq: builder.query({
        //     query: ({uid}) => ({
        //         url:`/stack/req/${}`
        //     })
        // }),
        createStackReq:builder.mutation({
            query:({data})=>({
                url:'/stack',
                method:'POST',
                body:data
            }),
            transformResponse:(res:any)=>{
                return res
            }
        })
    }),
})

export const {useCreateStackReqMutation} = stackApi;