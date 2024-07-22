export default async function User({ session }) {
    if (!session || !session.user) {
        return (
            <div>
                <h1>You need to login</h1>
            </div>
        );
    }

    return (
        <div>
            <h1>Welcome {JSON.stringify(session)}</h1>
        </div>
    );
}
