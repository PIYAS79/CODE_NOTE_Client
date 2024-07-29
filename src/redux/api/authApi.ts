import baseApi from "./baseApi";



const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createUser: builder.mutation({
            query: (data) => {
                if (data.user.role === "STUDENT") {
                    // create student
                    return {
                        url: '/user/student',
                        method: 'POST',
                        body: data
                    }
                } else {
                    // create faculty
                    return {
                        url: '/user/teacher',
                        method: 'POST',
                        body: data
                    }
                }
            }
        }),
        loginUser: builder.mutation({
            query: (data) => ({
                url: '/auth/login',
                method: 'POST',
                body: data
            })
        }),
        changePassword:builder.mutation({
            query:({data})=>({
                url:'/auth/change',
                method:'PATCH',
                body:data
            })
        })
    })
})

export const { useCreateUserMutation, useLoginUserMutation,useChangePasswordMutation } = authApi;
