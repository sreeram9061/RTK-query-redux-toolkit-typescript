import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"

type itme={
    id: number,
    title: string,
    price: number,
    description:string,
    category: string,
    image: string,
    rating: {
        rate: number,
        count: number
    }
}

export const productApi=createApi({
    reducerPath:"productApi",
    baseQuery:fetchBaseQuery({baseUrl:"https://fakestoreapi.com/"}),
    endpoints:(builder)=>({
        getAllProduct:builder.query<itme[],void>({
            query:()=> "products",
        }),
        getProduct:builder.query<itme,number>({
            query:(id)=> `products/${id}`,
        })
    })

})

export const {useGetAllProductQuery,useGetProductQuery} = productApi