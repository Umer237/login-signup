import { DBCon } from "@/app/lib/DBconnection";
import { myModel } from "@/app/lib/model/signupModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";


export async function GET() {

    try {

        await mongoose.connect(DBCon);

        const Data = await myModel.find();

        return NextResponse.json(Data);

    } catch (error) {

        alert("Cant Connect to Database  "+ {error});
    }


}


export async function POST(request) {

    await mongoose.connect(DBCon);
    const payload = await request.json();
    const Data = new myModel(payload);

    const savedData = await Data.save();

    return NextResponse.json(savedData)


}