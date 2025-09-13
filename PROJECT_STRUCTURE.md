# PersonalPage - Project Structure

## Overview

This project has been restructured following React/Vite industry standards, adapting the design from the original My-Page vanilla HTML/CSS/JS implementation.

## File Structure

```
src/
├── components/           # Reusable React components
│   ├── layout/          # Layout components (Navbar, Footer)
│   │   ├── Navbar.jsx   # Navigation component with scroll effects
│   │   ├── Navbar.css   # Navbar styles
│   │   ├── Footer.jsx   # Footer component
│   │   └── Footer.css   # Footer styles
│   ├── sections/        # Page sections as components
│   │   ├── Hero.jsx     # Hero/landing section
│   │   ├── Hero.css     # Hero styles
│   │   ├── AboutUs.jsx  # About us section
│   │   ├── AboutUs.css  # About us styles
│   │   ├── Services.jsx # Services grid section
│   │   ├── Services.css # Services styles
│   │   ├── Features.jsx # Features list section
│   │   ├── Features.css # Features styles
│   │   ├── CTA.jsx      # Call-to-action section
│   │   └── CTA.css      # CTA styles
│   └── ui/              # Basic UI components
│       ├── Button.jsx   # Reusable button component
│       └── Button.css   # Button styles
├── data/               # Static data
│   ├── services.js     # Services data array
│   └── features.js     # Features data array
├── hooks/              # Custom React hooks
│   └── useScrollEffect.js # Hook for navbar scroll effect
├── utils/              # Utility functions
│   └── smoothScroll.js # Smooth scrolling functionality
├── styles/             # Global styles
│   └── globals.css     # Global CSS variables and base styles
├── App.jsx             # Main App component
├── index.css           # Main CSS entry point
└── main.jsx            # React entry point
```

## Key Features Implemented

### ✅ Component Architecture

- **Layout Components**: Navbar and Footer for consistent page structure
- **Section Components**: Each major page section as a separate component
- **UI Components**: Reusable Button component with variants
- **Proper CSS Modules**: Each component has its own CSS file

### ✅ Data Management

- **Separated Data**: Services and features data moved to dedicated files
- **Clean Imports**: Components import only the data they need

### ✅ Custom Hooks

- **useScrollEffect**: Manages navbar scroll state
- **Reusable Logic**: Hook can be used by other components if needed

### ✅ Utility Functions

- **smoothScroll**: Centralized smooth scrolling logic
- **Modular Approach**: Easy to test and maintain

### ✅ Styling Architecture

- **CSS Variables**: Consistent design system with CSS custom properties
- **Component Scoping**: Each component has its own CSS file
- **Responsive Design**: Mobile-first approach with media queries
- **Global Styles**: Base styles and utilities in globals.css

### ✅ Functionality Migration

- **Smooth Navigation**: Navbar links scroll to sections smoothly
- **Scroll Effects**: Navbar changes appearance on scroll
- **Dynamic Content**: Services and features rendered from data arrays
- **Interactive Elements**: Hover effects and transitions preserved

## Design Principles Applied

1. **Separation of Concerns**: Logic, data, and presentation are separated
2. **Component Reusability**: Components can be reused and composed
3. **Maintainability**: Clear file structure makes code easy to maintain
4. **Scalability**: Structure supports adding new features easily
5. **Industry Standards**: Follows React and Vite best practices

## Technologies Used

- **React 19**: Latest React with modern features
- **Vite**: Fast build tool and dev server
- **CSS Modules**: Component-scoped styling
- **ES6 Modules**: Modern JavaScript module system

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

This structure provides a solid foundation for further development while maintaining the original design and functionality of the My-Page project.
