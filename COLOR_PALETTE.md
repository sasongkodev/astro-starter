# Complete Color Palette Guide

I've added a comprehensive, modern color palette to your Tailwind CSS configuration! 🎨

## Available Color Palettes

### 🟣 Primary (Purple/Blue)
Perfect for main brand colors, primary buttons, and key UI elements.

```html
<div class="bg-primary-500 text-white">Primary Button</div>
<div class="bg-primary-100 text-primary-900">Light Background</div>
```

**Shades**: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950

---

### 💗 Secondary (Pink/Rose)
Great for secondary actions, highlights, and feminine designs.

```html
<button class="bg-secondary-500 hover:bg-secondary-600">Secondary Action</button>
<div class="border-secondary-300">Highlighted Card</div>
```

**Shades**: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950

---

### 🔵 Accent (Cyan/Teal)
Eye-catching colors for CTAs, links, and special elements.

```html
<a class="text-accent-600 hover:text-accent-700">Click Here</a>
<div class="bg-accent-50 border-accent-200">Info Box</div>
```

**Shades**: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950

---

### ✅ Success (Green)
For success messages, confirmations, and positive states.

```html
<div class="bg-success-100 text-success-800 border-success-300">
  ✓ Operation successful!
</div>
```

**Shades**: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950

---

### ⚠️ Warning (Amber/Orange)
For warnings, cautions, and attention-grabbing elements.

```html
<div class="bg-warning-100 text-warning-800 border-warning-300">
  ⚠ Please review this carefully
</div>
```

**Shades**: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950

---

### ❌ Error (Red)
For error messages, destructive actions, and critical alerts.

```html
<div class="bg-error-100 text-error-800 border-error-300">
  ✗ An error occurred
</div>
```

**Shades**: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950

---

### ℹ️ Info (Blue)
For informational messages and neutral highlights.

```html
<div class="bg-info-100 text-info-800 border-info-300">
  ℹ Did you know?
</div>
```

**Shades**: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950

---

### ⚫ Neutral (Gray)
For text, backgrounds, borders, and general UI elements.

```html
<div class="bg-neutral-100 text-neutral-900">Content Area</div>
<p class="text-neutral-600">Secondary text</p>
```

**Shades**: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950

---

### 🌙 Dark (Dark Mode)
Optimized colors for dark mode interfaces.

```html
<div class="bg-dark-100 text-dark-900">Dark Mode Card</div>
```

**Shades**: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900

---

## Usage Examples

### Buttons
```html
<!-- Primary Button -->
<button class="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg">
  Primary Action
</button>

<!-- Secondary Button -->
<button class="bg-secondary-500 hover:bg-secondary-600 text-white px-6 py-3 rounded-lg">
  Secondary Action
</button>

<!-- Outline Button -->
<button class="border-2 border-accent-500 text-accent-600 hover:bg-accent-50 px-6 py-3 rounded-lg">
  Outline Button
</button>
```

### Alert Messages
```html
<!-- Success Alert -->
<div class="bg-success-50 border-l-4 border-success-500 text-success-900 p-4">
  <p class="font-bold">Success!</p>
  <p>Your changes have been saved.</p>
</div>

<!-- Warning Alert -->
<div class="bg-warning-50 border-l-4 border-warning-500 text-warning-900 p-4">
  <p class="font-bold">Warning!</p>
  <p>This action cannot be undone.</p>
</div>

<!-- Error Alert -->
<div class="bg-error-50 border-l-4 border-error-500 text-error-900 p-4">
  <p class="font-bold">Error!</p>
  <p>Something went wrong.</p>
</div>
```

### Cards
```html
<div class="bg-white border border-neutral-200 rounded-xl p-6 shadow-lg">
  <h3 class="text-primary-700 font-bold text-xl mb-2">Card Title</h3>
  <p class="text-neutral-600">Card content goes here</p>
  <button class="mt-4 bg-accent-500 hover:bg-accent-600 text-white px-4 py-2 rounded-lg">
    Learn More
  </button>
</div>
```

### Gradients
```html
<!-- Primary Gradient -->
<div class="bg-gradient-to-r from-primary-500 to-primary-700 text-white p-8">
  Gradient Background
</div>

<!-- Multi-color Gradient -->
<div class="bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500 text-white p-8">
  Vibrant Gradient
</div>
```

## Color Combinations

### Professional
- Primary: `primary-600`
- Background: `neutral-50`
- Text: `neutral-900`
- Accent: `accent-500`

### Vibrant
- Primary: `primary-500`
- Secondary: `secondary-500`
- Accent: `accent-400`
- Background: Gradients

### Dark Mode
- Background: `dark-50` or `dark-100`
- Text: `dark-900` or `dark-800`
- Accent: `primary-400` or `accent-400`
- Borders: `dark-300`

## Tips

1. **Use lighter shades (50-200)** for backgrounds
2. **Use medium shades (400-600)** for interactive elements
3. **Use darker shades (700-950)** for text and emphasis
4. **Maintain contrast** for accessibility (WCAG AA: 4.5:1 for text)
5. **Be consistent** with your color choices across the app

Enjoy your new color palette! 🎨✨
