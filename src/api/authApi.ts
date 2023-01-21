import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000/'}),
    endpoints: (build) => ({
        login: build.mutation({
            query: () => {
                return {
                    url: 'users',
                    method: 'GET'
                }
            } 
        }),
        register: build.mutation({
            query: (body) => {
                return {
                    url: 'users',
                    method: 'POST',
                    body
                }
            }
        })
    })
})

export const { useLoginMutation, useRegisterMutation } = authApi