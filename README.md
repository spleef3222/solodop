# Solodop

Solodop is a Node.js module for color manipulation and palette generation using chroma-js.

## Installation

You can install this module via npm: `npm install solodop`

## Usage

```javascript
const chromaUtils = require('chroma-utils');

// Generate a random color
const randomColor = chromaUtils.generateRandomColor();

// Lighten a color
const lightenedColor = chromaUtils.lightenColor('#3498db', 0.5);

// Darken a color
const darkenedColor = chromaUtils.darkenColor('#3498db', 0.5);

// Generate a color palette
const palette = chromaUtils.generateColorPalette('#3498db', 5);
```