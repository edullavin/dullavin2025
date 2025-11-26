# Copilot Instructions for EMD 2025 Website

## Overview
This is a personal website for Eric M. Dullavin built with Next.js 16, React 19, and TypeScript. It uses the app router architecture with a global navigation component.

## Architecture
- **App Router Structure**: Pages are in `src/app/`, with `layout.tsx` containing global navigation and font loading.
- **Component Organization**: UI components in `src/components/ui/` (shadcn/ui), global components in `src/components/global/`.
- **Styling**: Tailwind CSS v4 with custom theme variables, dark mode support, and textured paper background.
- **Fonts**: Roboto (sans), Questrial (headings), Geist Mono (mono) loaded via `next/font`.

## Key Patterns
- **SVG Imports**: SVGs are imported as React components using `@svgr/webpack` (e.g., `import EMDLogo from "@/components/global/emd_logo.svg"`).
- **Class Merging**: Use `cn()` from `src/lib/utils.ts` for conditional Tailwind classes (e.g., `cn("base-class", condition && "additional-class")`).
- **Navigation**: Client-side navigation with hamburger menu for mobile, using state for toggle (see `MainNavigation.tsx`).
- **Color System**: Custom primary color palette with 50-950 shades defined in CSS variables (e.g., `--primary-100`).

## Workflows
- **Development**: `npm run dev` starts dev server with hot reload.
- **Build**: `npm run build` for production build.
- **Linting**: `npm run lint` uses ESLint with Next.js config.
- **Component Addition**: Use `npx shadcn@latest add <component>` to add shadcn/ui components (updates `components.json` and installs dependencies).

## Conventions
- **File Paths**: Use `@/` alias for `src/` (configured in `tsconfig.json` and `components.json`).
- **Component Naming**: PascalCase for components, kebab-case for files (e.g., `MainNavigation.tsx`).
- **Client Components**: Mark with `"use client"` directive when using hooks or browser APIs (e.g., `MainNavigation.tsx`).
- **Font Classes**: Apply heading fonts with `font-heading` class on h1-h6 elements.
- **Responsive Design**: Use Tailwind responsive prefixes (e.g., `hidden md:block` for desktop-only nav).

## Dependencies
- **UI Library**: Radix UI primitives via shadcn/ui for accessible components.
- **Icons**: Lucide React for icons.
- **Styling Utilities**: `clsx` and `tailwind-merge` for class management.</content>
<parameter name="filePath">d:\EMDSites\2025\.github\copilot-instructions.md