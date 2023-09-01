import { createClient } from "@supabase/supabase-js";
const supabase = createClient(
  "https://yvwufoergfmscvzptslc.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl2d3Vmb2VyZ2Ztc2N2enB0c2xjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI2OTgxNDYsImV4cCI6MjAwODI3NDE0Nn0.NDbkIqeu5RncN0xbOa-y_1QbRf-XJItLla_oaZXphZI"
);

export default supabase;