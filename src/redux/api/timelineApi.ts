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
                console.log({role,tag});
                return {
                    url: `/${role}?select=name,department&search=${tag}`,
                    method: 'GET'
                }
            },
            transformResponse: (res: any) => {
                return res.data;
            }
        }),
    })
})

export const { useGetCodesQuery, useGetUserQuery } = timelineApi;