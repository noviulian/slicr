"use client";

import { signIn } from "@/lib/auth";
import { authenticate } from "./actions";
import { Button } from "./ui/button";

export async function SignIn() {
    return (
        <form action={authenticate}>
            <Button type="submit">Signin with GitHub</Button>
        </form>
    );
}
