'use server'
import { NextResponse, NextRequest } from 'next/server';
import { AddToDatabase, DeleteFromDatabase } from './MutateDatabase';
export async function POST(req, res) {
    // Handle POST request
    let requ = await req.json()
    console.log(requ);
    AddToDatabase(requ.task);
    return NextResponse.json({ status: "success" });
}
export async function DELETE(req, res) {
    // Handle DELETE request
    let requ = await req.json()
    console.log(req.body.task);
    DeleteFromDatabase(requ.task);
    return NextResponse.json({ status: "success" });
}


