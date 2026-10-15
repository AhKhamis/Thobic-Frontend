 <p align="center">
  <img src="./public/ThobicBanner.png" alt="Thobic Banner" width="100%" />
</p>

<h1 align="center">Thobic Frontend</h1>

<p align="center">
  A web platform for ordering custom Thawb and connecting clients with tailoring shops and material providers.
</p>

<p align="center">
  <a href="https://thobic.vercel.app">Live Website</a> ·
  <a href="https://github.com/AhKhamis/Thobic-Frontend">Frontend Repository</a> ·
  <a href="https://github.com/AhKhamis/Thobic-Backend">Backend Repository</a> ·
  <a href="https://thobic-backend.onrender.com/docs">API Documentation</a>
</p>

---

## Table of Contents

- [Overview](#overview)
- [Core Idea](#core-idea)
- [Live Deployment](#live-deployment)
- [Repositories](#repositories)
- [Features and User Stories](#features-and-user-stories)
- [Entity Relationship Diagram](#entity-relationship-diagram)
- [API Route Reference](#api-route-reference)
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

Thobic is a web-based platform that allows clients to browse tailoring shops, choose materials, save their measurements, and place custom Thawb orders.

The frontend provides the user interface for clients, tailors, providers, and administrators. It communicates with the backend API to support authentication, profile management, material browsing, and order workflows.

## Core Idea

The platform aims to simplify the traditional Thawb ordering process by bringing clients, tailoring shops, and external material providers together in one digital experience.

The frontend is designed to help users:

- Browse tailoring shops and view shop details.
- Explore and filter available materials.
- Register and sign in securely.
- Save and manage personal measurements.
- Create and manage Thawb orders.
- Review proposed prices and delivery deadlines.
- Track order statuses.
- Access dashboards and features based on their user roles.

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

The following user stories describe the intended functionality of the platform. Availability depends on the current implementation.

### Client

- As a client, I want to sign up, sign in, and sign out securely.
- As a client, I want to browse tailoring shops and filter them by name, branch, and status.
- As a client, I want to create an order and assign it to a specific tailoring shop.
- As a client, I want to select a material from a tailor's available inventory.
- As a client, I want to select materials from an external provider when the tailor's inventory does not meet my needs.
- As a client, I want to browse and filter materials by texture, pattern, season, stand, colour, and price.
- As a client, I want to save my measurements for future orders.
- As a client, I want to update my saved measurements.
- As a client, I want to delete my measurements.
- As a client, I want to edit an order before the tailor accepts it.
- As a client, I want to delete an order before it is accepted.
- As a client, I want to approve or reject the proposed price and final delivery deadline.
- As a client, I want to confirm that my order has been delivered.

### Admin

- As an admin, I want to sign in and sign out securely.
- As an admin, I want to create tailor accounts.
- As an admin, I want to create provider accounts.

### Tailor

- As a tailor, I want to sign in and sign out securely.
- As a tailor, I want to create and update my shop profile.
- As a tailor, I want to view assigned orders and their statuses.
- As a tailor, I want to view material orders related to my shop.
- As a tailor, I want to accept or reject incoming Thawb orders.
- As a tailor, I want to propose a price and final delivery deadline.
- As a tailor, I want to update my shop status to open, closed, or busy.
- As a tailor, I want to update order statuses throughout the tailoring process.
- As a tailor, I want to confirm the delivery of materials from providers.
- As a tailor, I want to view a summary of assigned orders.
- As a tailor, I want to add materials to my inventory.
- As a tailor, I want to mark materials as available or unavailable.

### Provider

- As a provider, I want to sign in and sign out securely.
- As a provider, I want to create and update my profile.
- As a provider, I want to add materials to my inventory.
- As a provider, I want to view incoming material orders.
- As a provider, I want to accept a material order with an expected delivery date or reject it with a reason.
- As a provider, I want to update a material order's status to on the way.

---

## Entity Relationship Diagram

The following diagram illustrates the main entities and relationships used by the Thobic platform.

![Thobic Entity Relationship Diagram](./public/ERD.png)

---

## API Route Reference

The frontend communicates with the backend API to perform authentication, retrieve data, and manage user workflows.

The following tables summarize the API routes documented by the project. For the latest request schemas and available operations, refer to the [interactive Swagger documentation](https://thobic-backend.onrender.com/docs).

### Authentication

| Method | Endpoint            | Access              | Description                              |
| ------ | ------------------- | ------------------- | ---------------------------------------- |
| POST   | `/api/register`     | Public              | Register a client account.               |
| POST   | `/api/login`        | Public              | Authenticate a user.                     |
| GET    | `/api/current_user` | Authenticated users | Retrieve the current user's information. |

### Admin

| Method | Endpoint           | Access | Description                          |
| ------ | ------------------ | ------ | ------------------------------------ |
| POST   | `/api/admin/users` | Admin  | Create a tailor or provider account. |

### Profiles

| Method | Endpoint           | Access           | Description                          |
| ------ | ------------------ | ---------------- | ------------------------------------ |
| POST   | `/api/profiles`    | Tailor, Provider | Create a profile.                    |
| GET    | `/api/profiles/me` | Tailor, Provider | Retrieve the current user's profile. |
| PUT    | `/api/profiles/me` | Tailor, Provider | Update the current user's profile.   |

### Client Measurements

| Method | Endpoint               | Access | Description                  |
| ------ | ---------------------- | ------ | ---------------------------- |
| POST   | `/api/measurements`    | Client | Save measurements.           |
| GET    | `/api/measurements/me` | Client | Retrieve saved measurements. |
| PUT    | `/api/measurements/me` | Client | Update saved measurements.   |
| DELETE | `/api/measurements/me` | Client | Delete saved measurements.   |

### Materials

| Method | Endpoint                       | Access              | Description                        |
| ------ | ------------------------------ | ------------------- | ---------------------------------- |
| POST   | `/api/materials/upload-image`  | Tailor, Provider    | Upload a material image.           |
| POST   | `/api/materials`               | Tailor, Provider    | Add a material.                    |
| GET    | `/api/materials`               | Authenticated users | Browse and filter materials.       |
| GET    | `/api/materials/mine`          | Tailor, Provider    | Retrieve the user's own materials. |
| GET    | `/api/materials/{material_id}` | Authenticated users | Retrieve material details.         |
| PUT    | `/api/materials/{material_id}` | Material owner      | Update a material.                 |
| DELETE | `/api/materials/{material_id}` | Material owner      | Soft-delete a material.            |

Available material filters include `source_id`, `source_role`, `texture`, `pattern`, `season`, `stand`, `colour`, `min_price`, and `max_price`.

### Thawb Orders

| Method | Endpoint                                | Access           | Description                         |
| ------ | --------------------------------------- | ---------------- | ----------------------------------- |
| POST   | `/api/orders`                           | Client           | Create a Thawb order.               |
| GET    | `/api/orders/my-orders`                 | Client, Tailor   | Retrieve relevant orders.           |
| GET    | `/api/orders/{order_id}`                | Authorized users | Retrieve order details.             |
| PUT    | `/api/orders/{order_id}`                | Order owner      | Edit a pending order.               |
| DELETE | `/api/orders/{order_id}`                | Order owner      | Delete a pending order.             |
| PATCH  | `/api/orders/{order_id}/tailor-accept`  | Assigned tailor  | Propose a price and final deadline. |
| PATCH  | `/api/orders/{order_id}/tailor-reject`  | Assigned tailor  | Reject an order.                    |
| PATCH  | `/api/orders/{order_id}/client-respond` | Order owner      | Approve or decline the proposal.    |
| PATCH  | `/api/orders/{order_id}/in-progress`    | Assigned tailor  | Start tailoring.                    |
| PATCH  | `/api/orders/{order_id}/ready`          | Assigned tailor  | Mark an order as ready.             |
| PATCH  | `/api/orders/{order_id}/on-the-way`     | Assigned tailor  | Mark an order as on the way.        |
| PATCH  | `/api/orders/{order_id}/delivered`      | Order owner      | Confirm delivery.                   |

### Material Orders

| Method | Endpoint                                              | Access                        | Description                                            |
| ------ | ----------------------------------------------------- | ----------------------------- | ------------------------------------------------------ |
| GET    | `/api/material-orders`                                | Provider, Tailor              | Retrieve material orders.                              |
| GET    | `/api/material-orders/{material_order_id}`            | Authorized Provider or Tailor | Retrieve material order details.                       |
| PUT    | `/api/material-orders/{material_order_id}/accept`     | Provider                      | Accept an order and provide an expected delivery date. |
| PUT    | `/api/material-orders/{material_order_id}/reject`     | Provider                      | Reject a material order.                               |
| PUT    | `/api/material-orders/{material_order_id}/on-the-way` | Provider                      | Mark materials as shipped.                             |
| PUT    | `/api/material-orders/{material_order_id}/delivered`  | Assigned Tailor               | Confirm material delivery.                             |

### Shops

| Method | Endpoint               | Access | Description                                  |
| ------ | ---------------------- | ------ | -------------------------------------------- |
| GET    | `/api/shops`           | Public | Browse and filter tailoring shops.           |
| GET    | `/api/shops/{shop_id}` | Public | View a shop profile and available materials. |

---

## Wireframes

The wireframes illustrate the planned user interfaces and workflows for clients, tailors, providers, and administrators.

![Thobic Wireframes](./public/ThobicW.png)

---

## Frontend Architecture

The frontend is built with React and Vite. It uses client-side routing, shared authentication state, and API requests to communicate with the backend.

### Components Hierarchy

![Thobic Components Hierarchy](./public/components-hierarchy.png)

### Main Application Flow

The application displays different pages based on the user's authentication state and role.

| User Type | Initial Page After Sign-in |
| --------- | -------------------------- |
| Client    | `/shops`                   |
| Tailor    | `/tailor`                  |
| Provider  | `/provider/orders`         |
| Admin     | `/admin/create-user`       |

Guest users can access the public landing page and authentication screens.

---

## Project Structure

The following is a simplified overview of the frontend project structure. Update the paths if the current repository differs.

```text
Thobic-Frontend/
│
├── public/
│   ├── ThobicBanner.png
│   ├── ERD.png
│   ├── ThobicW.png
│   └── components-hierarchy.png
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── context/
│   ├── App.jsx
│   └── main.jsx
│
├── .env
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

_Note: This is a general overview. The actual names and locations of directories may differ in the current repository._

---

## Technologies Used

### Frontend

- **React 19** — User interface development.
- **Vite** — Development server and build tool.
- **React Router** — Client-side navigation and role-based page routing.
- **Axios** — HTTP requests to the backend API.
- **Fetch API** — Authentication requests.
- **Context API** — Shared authentication and user state.
- **JWT** — Token-based authentication.
- **CSS** — Application styling and responsive layouts.
- **ESLint** — Code linting.

### Backend Integration

- **FastAPI** — REST API.
- **PostgreSQL** — Application database.
- **SQLAlchemy** — Database ORM.
- **Cloudinary** — Material image hosting.
- **Swagger UI** — API exploration and testing.

For backend implementation details, visit the [Thobic Backend Repository](https://github.com/AhKhamis/Thobic-Backend).

### Development and Deployment

- **Git and GitHub** — Version control and collaboration.
- **Vercel** — Frontend deployment.
- **Render** — Backend deployment.
- **VS Code** — Code editor.

---

## Getting Started

Follow these steps to run the frontend locally.

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

Create a `.env` file in the project root and add the backend URL:

```env
VITE_BACK_END_SERVER_URL=https://thobic-backend.onrender.com
```

For local backend development, you can use:

```env
VITE_BACK_END_SERVER_URL=http://127.0.0.1:8000
```

The frontend API configuration uses the backend URL with the `/api` prefix.

### 4. Start the Development Server

```bash
npm run dev
```

Vite will display the local development URL in the terminal, typically `http://localhost:5173`.

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

| Variable                   | Purpose                         |
| -------------------------- | ------------------------------- |
| `VITE_BACK_END_SERVER_URL` | Base URL of the backend server. |

Vite exposes variables prefixed with `VITE_` to frontend code. Do not store database credentials, private API keys, or other server-side secrets in frontend environment variables.

---

## User Roles

Thobic supports four primary user roles.

| Role         | Description                         | Main Responsibilities                                                                 |
| ------------ | ----------------------------------- | ------------------------------------------------------------------------------------- |
| **Client**   | A customer ordering a custom Thawb. | Browse shops and materials, manage measurements, create orders, and confirm delivery. |
| **Tailor**   | A tailoring shop or tailor.         | Manage shop profiles, inventory, tailoring orders, prices, deadlines, and statuses.   |
| **Provider** | A material supplier.                | Manage material inventory and process incoming material orders.                       |
| **Admin**    | A platform administrator.           | Create tailor and provider accounts.                                                  |

### Home Page After Sign-in

- **Client:** `/shops`
- **Tailor:** `/tailor`
- **Provider:** `/provider/orders`
- **Admin:** `/admin/create-user`

The application uses the authenticated user's role to determine the appropriate dashboard or starting page.

---

## Future Development

Potential improvements include:

- Online payment integration.
- Notifications for order updates.
- Enhanced order tracking.
- Improved material search and filtering.
- Customer reviews and ratings.
- Delivery management.
- Analytics and reporting dashboards.
- Appointment booking.
- Additional accessibility and responsive design improvements.

These are potential enhancements and should not be considered implemented features unless available in the current application.

---

## Team

Thobic is a software engineering project focused on modernizing the traditional Thawb ordering and tailoring process through a centralized digital platform.

The project combines frontend development, backend engineering, database design, and cloud deployment to provide a convenient experience for clients, tailors, and material providers.

---

## Project Links

- [Live Website](https://thobic.vercel.app)
- [Frontend Repository](https://github.com/AhKhamis/Thobic-Frontend)
- [Backend Repository](https://github.com/AhKhamis/Thobic-Backend)
- [API Documentation](https://thobic-backend.onrender.com/docs)
