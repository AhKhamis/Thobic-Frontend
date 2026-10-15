# Thobic Frontend

![Thobic Banner](./public/ThobicBanner.png)

A web platform for ordering custom Thawb and connecting clients with tailoring shops and material providers.

[Live Website](https://thobic.vercel.app) · [Frontend Repository](https://github.com/AhKhamis/Thobic-Frontend) · [Backend Repository](https://github.com/AhKhamis/Thobic-Backend) · [API Documentation](https://thobic-backend.onrender.com/docs)

---

## Table of Contents
- [Overview](#overview)
- [Core Idea](#core-idea)
- [Live Deployment](#live-deployment)
- [Repositories](#repositories)
- [Features and User Stories](#features-and-user-stories)
- [Entity Relationship Diagram](#entity-relationship-diagram)
- [API Integration](#api-integration)
- [Wireframes](#wireframes)
- [Frontend Architecture](#frontend-architecture)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [User Roles](#user-roles)
- [Future Development](#future-development)
- [Team](#team)

---

## Overview
Thobic is a web-based platform that lets clients browse tailoring shops, choose materials, save measurements, and place custom Thawb orders. The frontend provides interfaces for clients, tailors, providers, and administrators, and communicates with the backend API for authentication and data management.

## Core Idea
The platform aims to simplify the traditional Thawb ordering process by bringing clients, tailoring shops, and external material providers together in one digital experience.

The frontend helps users:
- Browse tailoring shops and view shop details.
- Explore and filter materials.
- Register and sign in.
- Save and manage measurements.
- Create and manage Thawb orders.
- Review proposed prices and delivery deadlines.
- Track order statuses.
- Access role-specific features.

---

## Live Deployment
- **Live Website:** [Thobic](https://thobic.vercel.app)
- **Backend API:** [Thobic Backend](https://thobic-backend.onrender.com)
- **API Documentation:** [Swagger UI](https://thobic-backend.onrender.com/docs)

## Repositories
- **Frontend Repository:** [Thobic-Frontend](https://github.com/AhKhamis/Thobic-Frontend)
- **Backend Repository:** [Thobic-Backend](https://github.com/AhKhamis/Thobic-Backend)

---

## Features and User Stories
These user stories describe intended functionality. Availability depends on the current implementation.

### Client
- Sign up, sign in, and sign out securely.
- Browse tailoring shops.
- Create a Thawb order and select a tailoring shop.
- Select materials from a tailor's inventory or an external provider.
- Browse and filter materials by supported attributes.
- Save, update, and delete measurements.
- Edit or delete an order where permitted.
- Approve or reject the proposed price and delivery deadline.
- Confirm delivery.

### Admin
- Sign in and sign out securely.
- Create tailor accounts.
- Create provider accounts.

### Tailor
- Sign in and sign out securely.
- Create and update a shop profile.
- View assigned orders and their statuses.
- Accept or reject Thawb orders.
- Propose a price and delivery deadline.
- Update shop availability and order statuses.
- Manage inventory and material availability.
- Confirm material delivery.

### Provider
- Sign in and sign out securely.
- Create and update a provider profile.
- Manage material inventory.
- View, accept, or reject incoming material orders.
- Update material-order statuses.

---

## Entity Relationship Diagram
The diagram illustrates the main entities and relationships used by the Thobic platform.

![Thobic Entity Relationship Diagram](./public/ERD.png)

---

## API Integration
The frontend communicates with the backend API for authentication, profiles, measurements, materials, shops, and order workflows.

- **Production API:** `https://thobic-backend.onrender.com`
- **API prefix:** `/api`
- **Interactive documentation:** [Swagger UI](https://thobic-backend.onrender.com/docs)

Use Swagger UI for the latest endpoints, request schemas, and responses because the API can change as development continues.

---

## Wireframes
The wireframes illustrate planned interfaces and workflows for clients, tailors, providers, and administrators.

![Thobic Wireframes](./public/ThobicW.png)

---

## Frontend Architecture
The frontend is built with React and Vite. It uses client-side routing, shared authentication state, and API requests to communicate with the backend.

### Components Hierarchy
![Thobic Components Hierarchy](./public/components-hierarchy.png)

### Main Application Flow
| User Type | Initial Page After Sign-in |
| --- | --- |
| Client | `/shops` |
| Tailor | `/tailor` |
| Provider | `/provider/orders` |
| Admin | `/admin/create-user` |

Guest users can access the public landing page and authentication screens.

For backend implementation details, visit the [Thobic Backend Repository](https://github.com/AhKhamis/Thobic-Backend).

---

## Project Structure
Simplified overview; update paths if the repository differs.

```text
Thobic-Frontend/
├── public/
│   ├── ThobicBanner.png
│   ├── ERD.png
│   ├── ThobicW.png
│   └── components-hierarchy.png
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── context/
│   ├── App.jsx
│   └── main.jsx
├── .env
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

This is a general overview; actual file and directory names may differ.

---

## Technologies Used
### Frontend
- **React 19** — User interface development.
- **Vite** — Development server and build tool.
- **React Router** — Client-side navigation.
- **Axios** — HTTP requests to the backend.
- **Fetch API** — HTTP requests where used by the application.
- **Context API** — Shared application and authentication state.
- **JWT** — Token-based authentication.
- **CSS** — Styling and responsive layouts.
- **ESLint** — Code linting.

### Backend Integration
- **FastAPI** — REST API.
- **PostgreSQL** — Application database.
- **SQLAlchemy** — Database ORM.
- **Swagger UI** — API exploration and testing.

### Development and Deployment
- **Git and GitHub** — Version control.
- **Vercel** — Frontend deployment.
- **Render** — Backend deployment.
- **VS Code** — Code editor.

---

## Getting Started

### Prerequisites
- Node.js
- npm
- Git

### 1. Clone the Repository
```bash
git clone https://github.com/AhKhamis/Thobic-Frontend.git
cd Thobic-Frontend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env` file in the project root.

For the production backend:
```env
VITE_BACK_END_SERVER_URL=https://thobic-backend.onrender.com
```

For local backend development:
```env
VITE_BACK_END_SERVER_URL=http://127.0.0.1:8000
```

The frontend uses this base URL with the `/api` prefix.

### 4. Start the Development Server
```bash
npm run dev
```

Vite prints the local development URL in the terminal, typically `http://localhost:5173`.

### 5. Build for Production
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```

---

## Environment Variables
| Variable | Purpose |
| --- | --- |
| `VITE_BACK_END_SERVER_URL` | Base URL of the backend server. |

Vite exposes variables prefixed with `VITE_` to frontend code. Do not store database credentials, JWT secrets, private API keys, or other server-side secrets in frontend environment variables.

---

## User Roles
| Role | Description | Main Responsibilities |
| --- | --- | --- |
| **Client** | A customer ordering a custom Thawb. | Browse shops and materials, manage measurements, create orders, and confirm delivery. |
| **Tailor** | A tailoring shop or tailor. | Manage shop profiles, inventory, tailoring orders, prices, deadlines, and statuses. |
| **Provider** | A material supplier. | Manage material inventory and incoming material orders. |
| **Admin** | A platform administrator. | Create tailor and provider accounts. |

### Home Page After Sign-in
- **Client:** `/shops`
- **Tailor:** `/tailor`
- **Provider:** `/provider/orders`
- **Admin:** `/admin/create-user`

The application uses the authenticated user's role to determine the appropriate dashboard or starting page.

---

## Future Development
Potential improvements include online payments, notifications, enhanced order tracking, improved material search, customer reviews, delivery management, analytics, appointment booking, and additional accessibility and responsive-design improvements. These are potential enhancements, not claims that the features are currently implemented.

---

## Team
Thobic is a software engineering project focused on modernizing the traditional Thawb ordering and tailoring process through a centralized digital platform.

---

## Project Links
- [Live Website](https://thobic.vercel.app)
- [Frontend Repository](https://github.com/AhKhamis/Thobic-Frontend)
- [Backend Repository](https://github.com/AhKhamis/Thobic-Backend)
- [API Documentation](https://thobic-backend.onrender.com/docs)
