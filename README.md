# React Base Template

A clean and modern React TypeScript template with Tailwind CSS, ready to be cloned for new projects.

## 🚀 Features

- **React 19** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **ESLint** with advanced plugins for code quality
  - Auto-remove unused imports
  - Auto-sort imports alphabetically
  - React hooks dependency checking
  - Missing key prop detection
  - TypeScript path resolution
- **Prettier** for code formatting with format-on-save
- **PostCSS** with Autoprefixer
- **Axios** pre-configured with interceptors
- **React Router DOM** for client-side routing
- **Path aliases** (`@/` for src imports)
- **TypeScript types** for API responses
- **Organized folder structure** for scalable development

## 📁 Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Page components
├── hooks/         # Custom React hooks
├── contexts/      # React context providers
├── services/      # API services and external integrations
├── utils/         # Utility functions
├── types/         # TypeScript type definitions
├── constants/     # Application constants
├── assets/        # Static assets (images, icons, etc.)
├── App.tsx        # Main App component
├── main.tsx       # Application entry point
└── index.css      # Global styles with Tailwind CSS
```

## 🛠 Getting Started

### Using This as a Base Template

This project is designed to be used as a base template for new React projects. Follow these steps to create a new independent project:

#### To create a new project based on this template:

**Click the `Use this template` button on GitHub**:

1.  Click "Create a new repository"
2.  Input your "repository name"
3.  Click "create repository"

### Prerequisites

- Node.js (version 16 or higher)
- yarn

### Installation

After setting up your new repository:

1. Install dependencies:

```bash
yarn install
```

2. Copy environment variables:

```bash
cp .env.example .env
```

3. Update project information:
   - Edit `package.json` → change `name`, `version`, `description`
   - Update `README.md` with your project details
   - Modify `index.html` → update `<title>` and meta tags
   - Update `.env.example` with your project's environment variables

4. Start the development server:

```bash
yarn dev
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Customizing Your New Project

After setting up the template, customize it for your specific project:

#### Essential Updates

1. **Update package.json**:

   ```json
   {
     "name": "your-project-name",
     "version": "1.0.0",
     "description": "Your project description",
     "author": "Your Name",
     "license": "MIT"
   }
   ```

2. **Update index.html**:

   ```html
   <title>Your Project Name</title>
   <meta name="description" content="Your project description" />
   ```

3. **Update README.md**:
   - Replace the title and description
   - Update installation instructions if needed
   - Add your project-specific documentation
   - Remove this template usage section

4. **Environment Variables**:
   - Update `.env.example` with your project's variables
   - Configure `.env` with your actual values

#### Optional Customizations

1. **Branding**:
   - Replace `public/vite.svg` with your logo
   - Update `src/assets/react.svg` with your assets
   - Modify the Layout component with your branding

2. **Tailwind Theme**:
   - Customize colors in `tailwind.config.js`
   - Add your brand colors and fonts

3. **Remove Sample Pages** (if not needed):
   - Delete `src/pages/Login.tsx` if you don't need authentication
   - Remove sample content from `src/pages/Home.tsx`
   - Update routing in `src/components/AppRouter.tsx`

4. **API Configuration**:
   - Update `src/services/apiClient.ts` with your API endpoints
   - Modify interceptors for your authentication flow

### Clean Installation

If you need to perform a clean installation:

```bash
# Remove node_modules and reinstall
rm -rf node_modules
yarn install

# Or on Windows
rmdir /s node_modules
yarn install
```

## 📜 Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn lint` - Run ESLint on entire project
- `yarn lint:fix` - Run ESLint and fix issues automatically
- `yarn lint:src` - Run ESLint only on src folder
- `yarn lint:src:fix` - Run ESLint on src folder and fix issues
- `yarn format` - Format code with Prettier
- `yarn format:check` - Check code formatting with Prettier
- `yarn check` - Run both lint and format check
- `yarn fix` - Fix both lint and format issues
- `yarn preview` - Preview production build

## 🎨 Styling

This template uses Tailwind CSS for styling. The configuration is already set up and ready to use.

### Custom Styles

Add custom styles in `src/index.css` using Tailwind's layer system:

```css
@layer components {
  .btn-primary {
    @apply bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded;
  }
}
```

## 🔧 Configuration

### Tailwind CSS

The Tailwind configuration is in `tailwind.config.js`. Customize colors, fonts, and other design tokens here.

### TypeScript

TypeScript configuration is split into:

- `tsconfig.json` - Base configuration
- `tsconfig.app.json` - App-specific configuration
- `tsconfig.node.json` - Node.js configuration

### ESLint

ESLint configuration is in `eslint.config.js` with comprehensive React and TypeScript rules.

#### Installed Plugins:

- **eslint-plugin-import** - Import/export linting and auto-sorting
- **eslint-plugin-unused-imports** - Auto remove unused imports
- **eslint-plugin-react-hooks** - React hooks rules and dependency checking
- **eslint-plugin-react** - React JSX rules and best practices
- **eslint-import-resolver-typescript** - TypeScript path resolution

#### Key Features:

- ✅ **Auto-remove unused imports** - Keeps code clean
- ✅ **Auto-sort imports** - Alphabetical order with proper grouping
- ✅ **Missing key prop detection** - Prevents React rendering issues
- ✅ **useEffect dependency checking** - Catches missing dependencies
- ✅ **Array index key warnings** - Promotes better React patterns
- ✅ **Import order enforcement** - Consistent import organization
- ✅ **TypeScript path resolution** - Works with `@/` aliases

#### ESLint Rules Configured:

```javascript
// Import rules
'import/order': 'error',           // Auto-sort imports
'import/no-unresolved': 'error',   // Check import paths
'import/no-duplicates': 'error',   // Remove duplicate imports

// Unused imports
'unused-imports/no-unused-imports': 'error',  // Auto-remove unused
'unused-imports/no-unused-vars': 'warn',      // Warn about unused vars

// React hooks
'react-hooks/rules-of-hooks': 'error',        // Hooks rules
'react-hooks/exhaustive-deps': 'warn',        // useEffect deps

// React JSX
'react/jsx-key': 'error',                     // Missing key prop
'react/no-array-index-key': 'warn',           // Array index as key
```

#### Usage Examples:

```bash
# Check for all linting issues
yarn lint

# Auto-fix what can be fixed automatically
yarn lint:fix

# Lint only source code (faster)
yarn lint:src

# Fix only source code
yarn lint:src:fix

# Check both linting and formatting
yarn check

# Fix both linting and formatting issues
yarn fix
```

### Prettier

Prettier is configured for consistent code formatting:

- **Configuration**: `.prettierrc` - Formatting rules and preferences
- **Ignore files**: Uses `.gitignore` (no separate `.prettierignore` needed)
- **VSCode integration**: Automatic formatting on save for JSX/TSX files
- **ESLint integration**: Prettier rules are enforced through ESLint

Prettier settings:

- Single quotes for strings
- Semicolons enabled
- 2-space indentation
- 80 character line width
- Trailing commas in ES5-compatible locations

**Note**: We use `.gitignore` instead of a separate `.prettierignore` file to avoid duplication. Prettier automatically respects `.gitignore` patterns, so files that shouldn't be in version control (like `node_modules/`, `dist/`, etc.) are also excluded from formatting.

### Path Aliases

The project is configured with path aliases for cleaner imports:

```typescript
// Instead of relative imports
import { Button } from '../../../components/Button';

// Use absolute imports with @/ alias
import { Button } from '@/components';
```

### API Configuration

Axios is pre-configured with:

- Base URL from environment variables
- Request/response interceptors
- Automatic token handling
- Error handling for common HTTP status codes

```typescript
// Usage example
import { apiClient } from '@/services';

const fetchData = async () => {
  try {
    const response = await apiClient.get('/api/data');
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
  }
};
```

### Environment Variables

Copy `.env.example` to `.env` and configure:

```bash
cp .env.example .env
```

Available variables:

- `VITE_API_BASE_URL` - API base URL
- `VITE_APP_NAME` - Application name
- `VITE_APP_VERSION` - Application version

### Routing

The template includes React Router DOM with:

- **AppRouter component** - Main routing configuration
- **Route constants** - Centralized route definitions
- **Sample pages** - Home and 404 Not Found pages

```typescript
// Adding new routes
import { ROUTES } from '@/constants';

// In AppRouter.tsx
<Route path="/about" element={<About />} />

// In constants/routes.ts
export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  NOT_FOUND: '*',
} as const;
```

Current routes:

- `/` - Home page (with Layout)
- `/login` - Login page (standalone)
- `*` - 404 Not Found page (catch-all, with Layout)

### Layout Component

The template includes a Layout component (`src/components/Layout.tsx`) that provides:

- **Header with navigation** - Logo and navigation menu with active state
- **Footer** - Links, resources, and company information
- **Responsive design** - Mobile-friendly navigation

Pages can be wrapped with Layout or rendered standalone:

```typescript
// With Layout (most pages)
<Route path={ROUTES.HOME} element={<Layout><Home /></Layout>} />

// Standalone (login, auth pages)
<Route path={ROUTES.LOGIN} element={<Login />} />
```

### Sample Pages

The template includes sample pages to demonstrate different layouts:

- **Home Page** (`src/pages/Home.tsx`) - Feature showcase with cards
- **Login Page** (`src/pages/Login.tsx`) - Complete authentication form with:
  - Email/password fields with validation
  - Password visibility toggle
  - Remember me and forgot password options
  - Social login buttons (Google, Facebook)
  - Loading states and form handling
- **404 Page** (`src/pages/NotFound.tsx`) - Professional error page

## 📝 Usage Guidelines

### Adding Components

1. Create component files in `src/components/`
2. Export them from `src/components/index.ts`
3. Import using: `import { ComponentName } from '@/components'`

### Adding Pages

1. Create page components in `src/pages/`
2. Export them from `src/pages/index.ts`

### Adding Utilities

1. Create utility functions in `src/utils/`
2. Export them from `src/utils/index.ts`

### Adding Types

1. Create type definitions in `src/types/`
2. Export them from `src/types/index.ts`

## 🚀 Deployment

Build the project for production:

```bash
yarn build
```

The built files will be in the `dist/` directory, ready to be deployed to any static hosting service.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linting and tests
5. Submit a pull request
