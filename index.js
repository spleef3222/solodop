const chroma = require('chroma-js');
const randomColor = require('randomcolor');

// Function to generate a random color
function generateRandomColor() {
    return randomColor();
}

// Function to lighten a color
function lightenColor(color, amount) {
    return chroma(color).brighten(amount).hex();
}

// Function to darken a color
function darkenColor(color, amount) {
    return chroma(color).darken(amount).hex();
}

// Function to generate a color palette
function generateColorPalette(baseColor, numberOfColors) {
    return chroma.scale([baseColor, 'white']).mode('lab').colors(numberOfColors);
}

module.exports = {
    generateRandomColor,
    lightenColor,
    darkenColor,
    generateColorPalette
};
