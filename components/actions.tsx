"use server";

import { signIn, signOut } from "@/lib/auth";

export async function authenticate() {
    await signIn("github", {
        redirect: true,
        redirectTo: "/user",
    });
}

export async function logOut() {
    await signOut();
}
