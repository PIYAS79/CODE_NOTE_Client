import baseApi from "./baseApi";


const timelineApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // get all codes
        getCodes: builder.query({
            query: (tag) => {
                let url_endpt = `/code?search=${tag === undefined || tag === '' ? '' : tag}`
                return ({
                    url: url_endpt,
                    method: 'GET'
                })
            },
            transformResponse: (res: any) => {
                return res.data;
            }
        }),

        // get all students 
        getUser: builder.query({
            query: ({role,tag}) => {
                return {
                    url: `/${role}?select=name,department&search=${tag}`,
                    method: 'GET'
                }
            },
            transformResponse: (res: any) => {
                return res.data;
            }
        }),
        getUserCodes:builder.query({
            query:({uid})=>({
                url:`/code/user/${uid}`,
                method:"GET"
            }),
            transformResponse:(res:any)=>{
                return res.data;
            }
        }),
        // get all students 
        getMe: builder.query({
            query: ({role,email}) => {
                return {
                    url: `/${role}?email=${email}`,
                    method: 'GET'
                }
            },
            transformResponse: (res: any) => {
                return res.data;
            }
        }),
        updateUser:builder.mutation({
            query:({role,uid,data})=>({
                url:`/${role}/${uid}`,
                body:data,
                method:'PATCH'
            })
        })
    })
})

export const { useGetCodesQuery, useGetUserQuery,useGetUserCodesQuery,useGetMeQuery,useUpdateUserMutation } = timelineApi;