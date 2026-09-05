# Celerant Web UI

A React/TypeScript port of the Celerant Desktop Application frontend, designed to work with the Azulerant FastAPI backend.

## Features

- Authentication system (login/logout)
- Item lookup functionality
- Purchase order management (view lists, view details)
- Receiving management
- Reports generation
- Responsive design with Celerant-inspired styling

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Navigate to the frontend directory:
   ```bash
   cd celerant_web_ui
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Environment Variables

Create a `.env` file in the root directory with:
```
VITE_API_URL=https://your-backend-url.azurecontainerapps.io
```

### Development

To start the development server:
```bash
npm start
```

The app will be available at `http://localhost:3000`

### Production Build

To create a production build:
```bash
npm run build
```

The built files will be in the `dist` directory.

## API Integration

This frontend communicates with the Azulerant FastAPI backend at the URL specified in the `VITE_API_URL` environment variable.

Key endpoints used:
- `POST /login` - Authentication
- `GET /api/items/{item_id}` - Item lookup
- `GET /api/receiving/{po_number}` - Receiving information
- `GET /api/purchase-orders` - Purchase order list
- `GET /api/purchase-orders/{id}` - Purchase order details
- `GET /api/purchase-orders/{id}/items` - PO items

## Components

- `LoginScreen` - User authentication
- `ItemLookupScreen` - Search for item details
- `ReceivingScreen` - Manage PO receiving
- `PurchaseOrderListScreen` - View and filter POs
- `PurchaseOrderDetailScreen` - View detailed PO information
- `ReportsListScreen` - Generate various reports
- `NavBar` - Application navigation

## Styling

The UI uses a Celerant-inspired color scheme:
- Primary Blue: #003366
- Light Blue: #0066CC
- Gray: #F0F0F0
- Dark Gray: #CCCCCC
- Red: #CC0000 (for errors/actions)
- Green: #009900 (for success)

## Deployment

This application can be deployed to Azure Static Web Apps or any static hosting platform.

For Azure Static Web Apps:
1. Push the code to a GitHub repository
2. Create a new Static Web App in Azure Portal
3. Connect to your repository
4. Set the build command to `npm run build`
5. Set the app location to `dist`
6. Add the VITE_API_URL as an application setting

## Credits

Based on the original Celerant Desktop Application (Python Swing UI)
Frontend port created with React and TypeScript
