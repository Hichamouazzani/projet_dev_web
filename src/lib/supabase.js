import { createClient } from  '@supabase/supabase-js'

const  SUPABSE_URL = 'https://tgxghhwwwmilgozwojvi.supabase.co'
const  SUPABASE_PUBLIC_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRneGdoaHd3d21pbGdvendvanZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTI2NTczNzYsImV4cCI6MTk2ODIzMzM3Nn0.1kEu3jzFP7ubw3JiDg0haYd6rnTE_JK_iT9kdjU1w7Y'

const supabase = createClient(SUPABSE_URL, SUPABASE_PUBLIC_KEY)

export default supabase