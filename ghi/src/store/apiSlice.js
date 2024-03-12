import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const API_HOST = import.meta.env.VITE_API_HOST

export const chatApi = createApi({
    reducerPath: 'chatApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_HOST,
        credentials: 'include',
    }),
    endpoints: (builder) => ({
        getToken: builder.query({
            query: () => '/token',
            providesTags: ['Account'],
        }),
        login: builder.mutation({
            query: (info) => {
                let formData = null
                if (info instanceof HTMLElement) {
                    formData = new FormData(info)
                } else {
                    formData = new FormData()
                    formData.append('username', info.username)
                    formData.append('password', info.password)
                }
                return {
                    url: '/token',
                    method: 'post',
                    body: formData,
                }
            },
            invalidatesTags: (result) => {
                return (result && ['Account']) || []
            },
        }),
        logout: builder.mutation({
            query: () => {
                return {
                    url: '/token',
                    method: 'delete',
                }
            },
            invalidatesTags: ['Account'],
        }),
    }),
})

export const {
    useGetTokenQuery,
    useLoginMutation,
    useLogoutMutation
} = chatApi
