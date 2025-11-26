# Custom CSS Structure

This directory contains custom CSS files for the application.

## File Organization

- **`custom.css`** - General custom styles, animations, and unique CSS
- **`components.css`** - Component-specific styles
- **`utilities.css`** - Reusable utility classes

## Usage

All CSS files in this directory are automatically imported in `src/app/globals.css`.

### Adding New Styles

1. **Custom Styles**: Add to `custom.css` for one-off styles or custom animations
2. **Component Styles**: Add to `components.css` for styles specific to a component
3. **Utilities**: Add to `utilities.css` for reusable classes across the app

### Example

```css
/* In utilities.css */
.my-custom-class {
  @apply bg-primary-500 text-white p-4;
}
```

Then use in your components:
```tsx
<div className="my-custom-class">Content</div>
```

## Best Practices

- Use Tailwind's `@apply` directive when possible to leverage the design system
- Prefix custom classes to avoid conflicts (e.g., `.custom-`, `.app-`)
- Document complex styles with comments
- Keep styles modular and organized by purpose
