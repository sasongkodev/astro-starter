# Google Fonts Usage Guide

I've successfully added **Inter**, **Poppins**, and **Montserrat** Google Fonts to your Astro project! 🎉

## How to Use

You can now use these fonts anywhere in your project with Tailwind CSS utility classes:

### Font Classes

- **Inter**: `font-inter`
- **Poppins**: `font-poppins`
- **Montserrat**: `font-montserrat`

### Available Font Weights

All three fonts include weights: 300, 400, 500, 600, 700, 800, 900

Use with Tailwind weight utilities:
- `font-light` (300)
- `font-normal` (400)
- `font-medium` (500)
- `font-semibold` (600)
- `font-bold` (700)
- `font-extrabold` (800)
- `font-black` (900)

## Examples

```html
<!-- Inter font -->
<h1 class="font-inter font-bold text-4xl">
  Heading with Inter
</h1>

<!-- Poppins font -->
<p class="font-poppins font-medium text-lg">
  Paragraph with Poppins
</p>

<!-- Montserrat font -->
<button class="font-montserrat font-semibold">
  Button with Montserrat
</button>
```

## What Was Added

1. **Google Fonts Link** in `index.astro`:
   - Preconnect links for faster loading
   - Stylesheet with all three fonts and multiple weights

2. **Tailwind Theme Extension** in `global.css`:
   - Custom font family variables
   - Easy-to-use utility classes

## Performance Optimization

The fonts are loaded with:
- `preconnect` for faster DNS resolution
- `display=swap` for better loading performance
- Multiple weights in a single request

Enjoy your new fonts! 🚀
