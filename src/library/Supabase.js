import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://lphfsvnfoyfgrootpbmn.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxwaGZzdm5mb3lmZ3Jvb3RwYm1uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU5NjU2MDIsImV4cCI6MjA4MTU0MTYwMn0.dGFjiNq52XdtaJTjE1h4XePRpmu8msvIGws-dfNAubs'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)