/* eslint-disable @typescript-eslint/no-explicit-any */

import { mockSupabase } from "./mock";

export async function createClient() {
    return mockSupabase as unknown as any;
}

export async function createAdminClient() {
    return mockSupabase as unknown as any;
}
