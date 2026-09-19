-- Enable UUID generation
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Table: profiles
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT NOT NULL,
  display_name TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Table: scan_results
CREATE TABLE IF NOT EXISTS public.scan_results (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  audio_name TEXT NOT NULL,
  spoof_score NUMERIC(5, 4),
  confidence NUMERIC(5, 4),
  status TEXT NOT NULL,
  risk_level TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Table: call_sessions
CREATE TABLE IF NOT EXISTS public.call_sessions (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  session_id TEXT UNIQUE NOT NULL,
  status TEXT NOT NULL,
  risk_level TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Table: threat_events
CREATE TABLE IF NOT EXISTS public.threat_events (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  session_id TEXT REFERENCES public.call_sessions(session_id) ON DELETE CASCADE NOT NULL,
  event_type TEXT NOT NULL,
  severity TEXT NOT NULL,
  details JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security (RLS) on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.scan_results ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.call_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.threat_events ENABLE ROW LEVEL SECURITY;

-- RLS Policies for profiles
CREATE POLICY "Users can view their own profile" 
ON public.profiles FOR SELECT 
USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile" 
ON public.profiles FOR UPDATE 
USING (auth.uid() = id);

-- RLS Policies for scan_results
CREATE POLICY "Users can view their own scan results" 
ON public.scan_results FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own scan results" 
ON public.scan_results FOR INSERT 
WITH CHECK (auth.uid() = user_id);

-- RLS Policies for call_sessions
CREATE POLICY "Users can view their own call sessions" 
ON public.call_sessions FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own call sessions" 
ON public.call_sessions FOR INSERT 
WITH CHECK (auth.uid() = user_id);

-- RLS Policies for threat_events
-- Threat events are accessed via the session owner
CREATE POLICY "Users can view threat events for their sessions" 
ON public.threat_events FOR SELECT 
USING (
  EXISTS (
    SELECT 1 FROM public.call_sessions
    WHERE call_sessions.session_id = threat_events.session_id
    AND call_sessions.user_id = auth.uid()
  )
);

CREATE POLICY "Users can insert threat events for their sessions" 
ON public.threat_events FOR INSERT 
WITH CHECK (
  EXISTS (
    SELECT 1 FROM public.call_sessions
    WHERE call_sessions.session_id = threat_events.session_id
    AND call_sessions.user_id = auth.uid()
  )
);
