/* 
  lib/supabase.ts
  ------------------------
  Creates a supabase client that can be passed to any page/component that needs it
 */

import { createClient } from "@supabase/supabase-js";

// These env variables are different for production and development
// Found in .env.development and .env.production
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

export default createClient(supabaseUrl, supabaseAnonKey);

export const getServiceSupabase = () =>
  createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    process.env.SUPABASE_SERVICE_KEY as string
  );

const options = {
  schema: "public",
  headers: { "x-my-custom-header": "my-app-name" },
  autoRefreshToken: true,
  persistSession: true,
  detectSessionInUrl: true,
};
