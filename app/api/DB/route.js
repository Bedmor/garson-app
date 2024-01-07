'use server'
import { NextResponse} from 'next/server';
import { AddToDatabase, DeleteFromDatabase } from './MutateDatabase';
export async function POST(req, res) {
    // Handle POST request
    let requ = await req.json()
    console.log(AddToDatabase(requ.task) ? "success" : "fail")
    return NextResponse.json({ status: "success" });
}

export async function DELETE(req, res) {
    // Handle DELETE request
    let requ = await req.json()
    console.log(DeleteFromDatabase(requ.task) ? "success" : "fail")
    return NextResponse.json({ status: "success" });
}


