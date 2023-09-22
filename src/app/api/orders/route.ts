import { NextResponse } from "next/server"
import prisma from "@/utils/connect"
import { getAuthSession } from "../auth/[...nextauth]/route"
export const GET =(req:NextResponse)=>{
    

    return  new NextResponse(JSON.stringify('sa'))   
}



