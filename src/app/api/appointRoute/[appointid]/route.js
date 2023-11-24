import { DBCon } from "@/app/lib/DBconnection";
import { AppointModel } from "@/app/lib/model/appointmentModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";


export async function PUT(request, content) {

    await mongoose.connect(DBCon);

    //to get url id
    const Appointid = content.params.appointid;

    // to specify factor from db to be update
    const filter = { _id: Appointid }

    // request that need to be update
    const payload = await request.json();

    //updating
    const data = await AppointModel.findOneAndUpdate(filter,payload);

    return NextResponse.json(data);

}

export async function GET(request, content) {

    await mongoose.connect(DBCon);

    //to get url id
    const Appointid = content.params.appointid;

    // to specify factor from db to get data
    const filter = { _id: Appointid };

    //gettting
    const data = await AppointModel.findById(filter);

    return NextResponse.json(data);

}