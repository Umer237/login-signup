import { DBCon } from "@/app/lib/DBconnection";
import { AppointModel } from "@/app/lib/model/appointmentModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";


export async function GET(){

    await mongoose.connect(DBCon);

    const data = await AppointModel.find();

    return NextResponse.json(data);
}


export async function POST(request){

await mongoose.connect(DBCon);

const mydata = await request.json();

const data = await AppointModel(mydata);
const savedData= await data.save();

return NextResponse.json(savedData);

}