🏡 RealEstateX

RealEstateX is a full-stack real estate listing platform that allows users to browse, search, and post property listings easily.
It features interactive maps, smart search with autocomplete, secure login, and a modern UI — making it a complete property discovery experience.

✨ Features

Browse featured property listings with images, details, and pricing

Search properties via Google Places Autocomplete

View listing locations on an interactive Google Map

Filter by beds, baths, parking, and home type

Create and manage property listings after logging in

Secure authentication using Clerk

Store listings and user data in Supabase

Fully responsive UI built with Tailwind CSS + React

🛠️ Tech Stack

Framework: Next.js (React)

Styling: Tailwind CSS

Authentication: Clerk

Database: Supabase

APIs: Google Maps API, Google Places API

Hosting: Vercel (optional)

🚀 How to Run Locally
Clone the repository
'''
git clone https://github.com/anantvm/RealEstateX.git
cd realestatex
'''

Install dependencies
'''npm install'''

Add environment variables

Create a .env.local file and include:
'''
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_key
CLERK_SECRET_KEY=your_clerk_secret

NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

GOOGLE_MAPS_API_KEY=your_maps_api_key
GOOGLE_PLACES_API_KEY=your_places_api_key
'''
Run the development server
'''npm run dev'''

Open your browser
'''http://localhost:3000'''
