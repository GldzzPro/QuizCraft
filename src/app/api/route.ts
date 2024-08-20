import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";


export async function GET(){
    const session = await getServerSession(authOptions);

    if(!session) {
        return new NextResponse(JSON.stringify({authenticated: false}), {
            status: 401
        })
    }
    return NextResponse.json({authenticated: !!session})    
}