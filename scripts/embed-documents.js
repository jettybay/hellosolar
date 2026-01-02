import { supabaseAdmin as supabase } from '../admin'
import { openai } from '../openai'

// 2️⃣ Documents to embed (example)
const documents = [
  'Supabase is an open source Firebase alternative.',
  'Next.js is a React framework for production.',
  'Vector embeddings enable semantic search.'
]
