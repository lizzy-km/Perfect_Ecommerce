import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const ProductsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({
       baseUrl: 'https://fakestoreapi.com', 
      }),
    tagTypes:["product"],
    endpoints: (builder) => ({
      products: builder.query({
        query:(user)=>({
          url:"/products",
          method:"GET",
          body:user,
        }),
        providesTags:["product"]
      }),
      sliderProducts: builder.query({
        query:(user)=>({
          url:"/products?limit=3",
          method:"GET",
          body:user,
        }),
        providesTags:["product"]
      }),
  
      
      
    }),
})
export const { useProductsQuery, useSliderProductsQuery } = ProductsApi