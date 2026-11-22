const SUPABASE_URL = "https://jpvsjygohgnzgfqoqawp.supabase.co/rest/v1/";
const SUPABASE_ANON_KEY = "process.env.SUPABASE_KEY";

const supabaseClient = supabase.createClient("https://jpvsjygohgnzgfqoqawp.supabase.co/rest/v1/", process.env.SUPABASE_KEY);
