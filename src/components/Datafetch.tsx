import React from 'react'
import { useGetAllProductQuery, useGetProductQuery } from '../Redux/apiSlice'

const Datafetch = () => {

  const {data:allData,isLoading:isLoadingAllData}=useGetProductQuery(5)
  const {data:singleData,isLoading:isLoadingSingleData}=useGetAllProductQuery()

  if(isLoadingAllData){
    console.log("loading...")
  }else{
    console.log(singleData,allData)
  }

  return (
    <div>
      
    </div>
  )
}

export default Datafetch
