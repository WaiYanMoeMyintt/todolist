import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";

import { NextResponse, NextRequest } from "next/server";

export async function POST(request){
    const {title, description} = await  request.json();
    await connectMongoDB();
    await Topic.create({title, description});
    return NextResponse.json({message:"topic created", status:201})
}

export async function GET(){
       await connectMongoDB();
       const topics = await Topic.find();
       return NextResponse.json({topics});
    
    
    }