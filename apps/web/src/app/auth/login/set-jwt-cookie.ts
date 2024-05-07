"use server";
import { cookies } from "next/headers";

export default async function setJwtCookie(token: string) {
    cookies().set("token", token, {
        httpOnly: true,
        secure: true,
        maxAge: 60 * 60 * 24 * 7,
    });
}