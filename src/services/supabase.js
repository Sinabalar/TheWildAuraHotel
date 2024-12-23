import {createClient} from '@supabase/supabase-js'

export const supabaseUrl = 'https://vfjozfvszkimunhgluxt.supabase.co'

const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZmam96ZnZzemtpbXVuaGdsdXh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQyNjk4NjgsImV4cCI6MjA0OTg0NTg2OH0.T2fh-eDtK-HVczadEmykPmy23yM7uXCt3quXcxOH2jM"

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase