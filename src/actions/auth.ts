
"use server";

import { redirect } from "next/navigation";

export async function login(_formData: FormData) { // eslint-disable-line @typescript-eslint/no-unused-vars
    // Dummy login always succeeds
    redirect("/dashboard");
}

export async function register(_formData: FormData) { // eslint-disable-line @typescript-eslint/no-unused-vars
    // Dummy register always succeeds
    redirect("/dashboard");
}

export async function logout() {
    // Redirect to landing page on logout
    redirect("/");
}
