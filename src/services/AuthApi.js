// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
     baseUrl: 'https://contact-app.mmsdev.site/api/v1', 
    }),
  tagTypes:["auth"],
  endpoints: (builder) => ({
    register: builder.mutation({
      query:(user)=>({
        url:"/register",
        method:"POST",
        body:user,
      }),
      invalidatesTags:["auth"]
    }),

    login: builder.mutation({
        query:(user) =>({
            url:'/login',
            method:'POST',
            body:user,
        }),
        invalidatesTags:["auth"]
    }),
    logout: builder.mutation({
      query:(token)=>({
        url:'/user-logout',
        method:'POST',
        // body:token,
        headers:{authorization : `Bearer ${token}`},
      }),
      invalidatesTags:['auth'],
    })
    
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useRegisterMutation, useLoginMutation,useLogoutMutation } = authApi