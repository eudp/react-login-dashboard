# React Login and Dashboard

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/eudp/react-login-dashboard.git
   ```

2. **Install dependencies:**

   ```bash
   cd react-login-dashboard
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

4. **Open your browser:** The application will be available at `http://localhost:5173`.

## Testing

The end-to-end (E2E) tests use Playwright and require the development server to be running.

1. **Start the server:**

   ```bash
   npm run dev
   ```

2. **Run the tests (in a separate terminal):**
   ```bash
   npm run test
   ```

## Valid User Credentials

For testing purposes, a valid user is provided:

- **Email:** `prologin@prologin.com`
- **Password:** `ProLogin123456`

## Tech Stack

- **React 18:** Core UI library.
- **TypeScript:** Static typing for improved code quality and maintainability.
- **Vite:** Fast build tool and development server.
- **Tailwind CSS:** Utility-first CSS framework for rapid styling.
- **ESLint:** Code linter for maintaining consistent code style.
- **Playwright:** End-to-end testing framework.
- **React Router DOM:** For routing and navigation.
- **react-virtuoso:** High-performance list virtualization library.

## Folder Structure

The project follows a clear and organized folder structure:

- `src/app`: Contains the core application logic.
  - `api`: API interaction logic.
  - `auth`: Authentication context and hooks.
  - `components`: Reusable UI components.
  - `hooks`: Custom React hooks.
  - `layout`: Layout components (e.g., Header).
  - `pages`: Page components (e.g., LoginPage, DashboardPage).
  - `routes`: Route definitions and access control (PrivateRoute, GuestRoute).
  - `types`: TypeScript type definitions.
  - `utils`: Utility functions.
- `src/assets`: Static assets.
- `tests`: Test files.
