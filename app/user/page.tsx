import User from "@/components/User";
import { auth } from "@/lib/auth";

export default async function Page() {
    const session = await auth();

    if (!session || !session.user) {
        return (
            <div>
                <h1>You need to login</h1>
            </div>
        );
    }

    return <User session={session} />;
}
