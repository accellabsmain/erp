
"use server";

import { redirect } from "next/navigation";

export async function login(formData: FormData) {
    // Dummy login always succeeds
    redirect("/dashboard");
}

export async function register(formData: FormData) {
    // Dummy register always succeeds
    redirect("/dashboard");
}

export async function logout() {
    // Redirect to landing page on logout
    redirect("/");
}
