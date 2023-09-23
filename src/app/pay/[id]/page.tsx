'use client'
import getData from "@/utils/getData"
import { useEffect } from "react"

const PayPage  =({params}:{params:{id:string}})=>{
  const {id} =params
  useEffect(()=>{
    const makeRequest = async()=>{
      try{
        const data=  await getData(`create-intent/${id}`,{
          method:'POST'
        })

      }catch(err){
      }
    }
  })

}