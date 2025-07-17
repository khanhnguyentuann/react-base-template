// Application routes
export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  NOT_FOUND: '*',
} as const;

// Route paths for navigation (same as ROUTES for consistency)
export const ROUTE_PATHS = {
  HOME: '/',
  LOGIN: '/login',
  NOT_FOUND: '*',
} as const;

// Route names for display
export const ROUTE_NAMES = {
  HOME: 'Home',
  LOGIN: 'Login',
  NOT_FOUND: 'Page Not Found',
} as const;
