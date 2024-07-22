import { signOut } from "@/lib/auth";
import { logOut } from "./actions";
import { Button } from "./ui/button";

export function SignOut() {
    return (
        <form action={logOut}>
            <Button type="submit">Sign Out</Button>
        </form>
    );
}
