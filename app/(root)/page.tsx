"use client";

import { Button } from "@/components/ui/button";
import { createUrl } from "./actions";
import { useFormState } from "react-dom";
export default function Home() {
    const [state, createUrlAction] = useFormState(createUrl, { error: null });
    return (
        <>
            <nav>
                <ul>
                    {["Home", "About", "Contact"].map((item) => (
                        <li key={item}>
                            <a>{item}</a>
                        </li>
                    ))}
                </ul>
            </nav>

            <h1>Welcome to Slicr</h1>

            <p>
                Slicr is a simple and fast URL shortener. It's free and easy to
                use.
            </p>

            <main>
                <form key={state?.resetKey} action={createUrlAction}>
                    <span>Enter your URL</span>
                    <input id="url" name="url" type="url" required />

                    <Button type="submit">Shorten</Button>
                </form>
            </main>

            <footer>
                <p>&copy; 2024 Slicr</p>
            </footer>
        </>
    );
}
