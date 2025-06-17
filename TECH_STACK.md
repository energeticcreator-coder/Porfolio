
# Technology Stack & Requirements

This portfolio website is built using modern frontend technologies. Below are the core requirements and dependencies:

## Core Framework
- **React** ^18.3.1 - JavaScript library for building user interfaces
- **TypeScript** - Static type checking for JavaScript
- **Vite** - Fast build tool and development server

## Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **Tailwind CSS Animate** ^1.0.7 - Animation utilities for Tailwind
- **Shadcn/ui Components** - High-quality, accessible React components
- **Lucide React** ^0.462.0 - Beautiful icon library
- **Class Variance Authority** ^0.7.1 - For component variants
- **clsx** ^2.1.1 - Utility for constructing className strings
- **Tailwind Merge** ^2.5.2 - Merge Tailwind CSS classes

## Routing & Navigation
- **React Router DOM** ^6.26.2 - Declarative routing for React

## Form Handling & Validation
- **React Hook Form** ^7.53.0 - Performant forms with easy validation
- **Zod** ^3.23.8 - TypeScript-first schema validation
- **@hookform/resolvers** ^3.9.0 - Validation resolvers for React Hook Form

## UI Component Libraries (Radix UI)
- **@radix-ui/react-accordion** ^1.2.0
- **@radix-ui/react-alert-dialog** ^1.1.1
- **@radix-ui/react-aspect-ratio** ^1.1.0
- **@radix-ui/react-avatar** ^1.1.0
- **@radix-ui/react-checkbox** ^1.1.1
- **@radix-ui/react-collapsible** ^1.1.0
- **@radix-ui/react-context-menu** ^2.2.1
- **@radix-ui/react-dialog** ^1.1.2
- **@radix-ui/react-dropdown-menu** ^2.1.1
- **@radix-ui/react-hover-card** ^1.1.1
- **@radix-ui/react-label** ^2.1.0
- **@radix-ui/react-menubar** ^1.1.1
- **@radix-ui/react-navigation-menu** ^1.2.0
- **@radix-ui/react-popover** ^1.1.1
- **@radix-ui/react-progress** ^1.1.0
- **@radix-ui/react-radio-group** ^1.2.0
- **@radix-ui/react-scroll-area** ^1.1.0
- **@radix-ui/react-select** ^2.1.1
- **@radix-ui/react-separator** ^1.1.0
- **@radix-ui/react-slider** ^1.2.0
- **@radix-ui/react-slot** ^1.1.0
- **@radix-ui/react-switch** ^1.1.0
- **@radix-ui/react-tabs** ^1.1.0
- **@radix-ui/react-toast** ^1.2.1
- **@radix-ui/react-toggle** ^1.1.0
- **@radix-ui/react-toggle-group** ^1.1.0
- **@radix-ui/react-tooltip** ^1.1.4

## Data Fetching & State Management
- **@tanstack/react-query** ^5.56.2 - Powerful data synchronization for React

## Additional UI Components
- **cmdk** ^1.0.0 - Command menu component
- **embla-carousel-react** ^8.3.0 - Carousel component
- **input-otp** ^1.2.4 - OTP input component
- **react-day-picker** ^8.10.1 - Date picker component
- **react-resizable-panels** ^2.1.3 - Resizable panel layouts
- **vaul** ^0.9.3 - Drawer component

## Theming & Notifications
- **next-themes** ^0.3.0 - Theme management
- **sonner** ^1.5.0 - Toast notifications

## Charts & Data Visualization
- **recharts** ^2.12.7 - Composable charting library

## Date Utilities
- **date-fns** ^3.6.0 - Modern JavaScript date utility library

## Development Requirements

### Node.js Version
- **Node.js** 16.x or higher
- **npm** 7.x or higher (or yarn/pnpm equivalent)

### Browser Support
- Modern browsers supporting ES2015+
- Chrome 61+
- Firefox 60+
- Safari 11+
- Edge 16+

## Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Key Features Enabled by This Stack

1. **Responsive Design** - Tailwind CSS utilities
2. **Type Safety** - TypeScript throughout
3. **Component Reusability** - Shadcn/ui and Radix UI primitives
4. **Smooth Animations** - Tailwind CSS animations and transitions
5. **Accessibility** - Built-in ARIA support from Radix UI
6. **Modern Development Experience** - Vite's fast HMR and build process
7. **Form Handling** - React Hook Form with Zod validation
8. **Icon System** - Lucide React icons
9. **Theme Support** - Dark/light mode capability
10. **Mobile-First** - Responsive design patterns

## Deployment Options

This static site can be deployed to:
- **Vercel** (recommended for React apps)
- **Netlify**
- **GitHub Pages**
- **AWS S3 + CloudFront**
- **Any static hosting service**

## Environment Variables

No environment variables are required for basic functionality. Add as needed for:
- Analytics tracking
- Contact form endpoints
- External API integrations
