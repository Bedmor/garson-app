'use server'
import { NextResponse,NextRequest } from 'next/server';
import { AddToDatabase, DeleteFromDatabase } from './MutateDatabase';
export async function POST(req, res) {
    // Handle POST request
    console.log(req.json());
    AddToDatabase(req.body.task);
    return NextResponse.json({status: "success"});
}
export async function DELETE(req, res) {
    // Handle DELETE request
    console.log(req.body.task);
    DeleteFromDatabase(req.body.task);
    return NextResponse.json({status: "success"});
}


