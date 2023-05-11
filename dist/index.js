"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomColor = exports.generateRandomColorSet = exports.generateColorSet = exports.extractRGB = exports.calculateLuminance = void 0;
/**
 * Calculates the luminance of an RGB color.
 * @param {number} r The red value of the color (0-255).
 * @param {number} g The green value of the color (0-255).
 * @param {number} b The blue value of the color (0-255).
 * @return {number} The luminance of the color (0-1).
 */
function calculateLuminance(r, g, b) {
    return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
}
exports.calculateLuminance = calculateLuminance;
/**
 * Extracts RGB values from a color code string in the format "#RRGGBB".
 * @param {string} colorCode The color code string to extract RGB values from.
 * @return {object} An object with "r", "g", and "b" properties representing the red, green, and blue values.
 */
function extractRGB(colorCode) {
    var r = parseInt(colorCode.slice(1, 3), 16);
    var g = parseInt(colorCode.slice(3, 5), 16);
    var b = parseInt(colorCode.slice(5, 7), 16);
    return { r: r, g: g, b: b };
}
exports.extractRGB = extractRGB;
/**
 * Generates a color set consisting of a background color and a visible text color based on that background color.
 * @param {string} backgroundColor The background color code to use.
 * @return {ColorSet} An object with "backgroundColor" and "textColor" properties.
 */
function generateColorSet(backgroundColor) {
    // Extract RGB values from the background color
    var _a = extractRGB(backgroundColor), r = _a.r, g = _a.g, b = _a.b;
    // Calculate the luminance of the background color
    var luminance = calculateLuminance(r, g, b);
    // Determine the appropriate text color based on the background color's luminance
    var textColor = luminance > 0.5 ? '#000000' : '#FFFFFF';
    // Return an object with the background and text colors
    return {
        backgroundColor: backgroundColor,
        textColor: textColor,
    };
}
exports.generateColorSet = generateColorSet;
/**
 * Generates a random color set consisting of a background color and a visible text color based on that background color.
 * @return {ColorSet} An object with "backgroundColor" and "textColor" properties.
 */
function generateRandomColorSet() {
    var backgroundColor = getRandomColor();
    return generateColorSet(backgroundColor);
}
exports.generateRandomColorSet = generateRandomColorSet;
/**
 * Generates a random color code in the format "#RRGGBB".
 * @return {string} A random color code.
 */
function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
exports.getRandomColor = getRandomColor;
//# sourceMappingURL=index.js.map