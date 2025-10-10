
# AI Expert Portfolio Layout

This is a code bundle for AI Expert Portfolio Layout. The original project is available at https://www.figma.com/design/AYdCQ3Pgxgcwck43EIVVZl/AI-Expert-Portfolio-Layout.

## Setup

### 1. Install dependencies

```bash
npm i
```

### 2. Configure Environment Variables

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Then edit `.env` and add your Google Maps API key:

```
VITE_GOOGLE_MAPS_API_KEY=your_actual_api_key_here
```

**Get your Google Maps API key:**
1. Go to [Google Cloud Console](https://console.cloud.google.com/google/maps-apis)
2. Create a new project or select an existing one
3. Enable the Maps JavaScript API
4. Create credentials (API Key)
5. Copy the API key to your `.env` file

**Important:** Never commit your `.env` file to version control. It's already listed in `.gitignore`.

### 3. Run the development server

```bash
npm run dev
```

When the dev server is running, visit [http://localhost:3000](http://localhost:3000) to view the site (Vite opens this URL automatically by default).

## Security Notes

- API keys are stored in environment variables (`.env` file)
- The `.env` file is excluded from git via `.gitignore`
- Use `.env.example` as a template for required environment variables
