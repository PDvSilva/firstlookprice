# Amazon EU Price Comparator

Compare Amazon product prices across different European marketplaces using web scraping with Puppeteer.

## Features

- 🛒 Compare prices across multiple Amazon EU countries
- 🌍 Support for UK, Germany, France, Italy, Spain, Netherlands, Poland, and Sweden
- 📊 Visual comparison with best price highlighting
- 🎨 Modern, responsive web interface
- 🔍 Extract product details: price, title, availability, ratings, and reviews

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Create a `.env` file** (optional):
   ```
   PORT=3000
   USER_AGENT=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36
   ```

3. **Start the server:**
   ```bash
   npm start
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000`

## Usage

1. Enter an Amazon ASIN (found in the product URL: `amazon.co.uk/dp/ASIN`)
2. Select one or more EU countries to compare
3. Click "Compare Prices" to see results across all selected marketplaces

## API Endpoints

### `POST /api/scrape`
Scrape a single Amazon product.

**Request:**
```json
{
  "asin": "B08N5WRWNW",
  "country": "uk"
}
```

**Response:**
```json
{
  "country": "uk",
  "asin": "B08N5WRWNW",
  "title": "Product Title",
  "price": 29.99,
  "currency": "GBP",
  "availability": "In Stock",
  "imageUrl": "...",
  "rating": 4.5,
  "reviewCount": 1234,
  "url": "..."
}
```

### `POST /api/compare`
Compare prices across multiple countries.

**Request:**
```json
{
  "asin": "B08N5WRWNW",
  "countries": ["uk", "de", "fr"]
}
```

**Response:**
```json
{
  "asin": "B08N5WRWNW",
  "comparison": [
    {
      "country": "uk",
      "success": true,
      "data": { ... }
    },
    ...
  ]
}
```

### `GET /api/health`
Health check endpoint.

## Supported Countries

- 🇬🇧 UK (amazon.co.uk)
- 🇩🇪 Germany (amazon.de)
- 🇫🇷 France (amazon.fr)
- 🇮🇹 Italy (amazon.it)
- 🇪🇸 Spain (amazon.es)
- 🇳🇱 Netherlands (amazon.nl)
- 🇵🇱 Poland (amazon.pl)
- 🇸🇪 Sweden (amazon.se)

## Technologies

- Node.js
- Express.js
- Puppeteer (web scraping)
- Vanilla JavaScript (frontend)

## Notes

- Web scraping may be slow depending on network conditions
- Amazon may implement anti-scraping measures; use responsibly
- Prices and availability are subject to change in real-time

## License

MIT
