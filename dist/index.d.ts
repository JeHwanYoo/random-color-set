/**
 * Represents a color set consisting of a background color and a visible text color based on that background color.
 */
export interface ColorSet {
    /**
     * The background color code.
     */
    backgroundColor: string;
    /**
     * The text color code that is visible on the background color.
     */
    textColor: '#000000' | '#FFFFFF';
}
/**
 * Represents an RGB color with red, green, and blue values.
 */
export interface RGBColor {
    /**
     * The red value of the color (0-255).
     */
    r: number;
    /**
     * The green value of the color (0-255).
     */
    g: number;
    /**
     * The blue value of the color (0-255).
     */
    b: number;
}
/**
 * Calculates the luminance of an RGB color.
 * @param {number} r The red value of the color (0-255).
 * @param {number} g The green value of the color (0-255).
 * @param {number} b The blue value of the color (0-255).
 * @return {number} The luminance of the color (0-1).
 */
export declare function calculateLuminance(r: number, g: number, b: number): number;
/**
 * Extracts RGB values from a color code string in the format "#RRGGBB".
 * @param {string} colorCode The color code string to extract RGB values from.
 * @return {object} An object with "r", "g", and "b" properties representing the red, green, and blue values.
 */
export declare function extractRGB(colorCode: string): RGBColor;
/**
 * Generates a color set consisting of a background color and a visible text color based on that background color.
 * @param {string} backgroundColor The background color code to use.
 * @return {ColorSet} An object with "backgroundColor" and "textColor" properties.
 */
export declare function generateColorSet(backgroundColor: string): ColorSet;
/**
 * Generates a random color set consisting of a background color and a visible text color based on that background color.
 * @return {ColorSet} An object with "backgroundColor" and "textColor" properties.
 */
export declare function generateRandomColorSet(): ColorSet;
/**
 * Generates a random color code in the format "#RRGGBB".
 * @return {string} A random color code.
 */
export declare function getRandomColor(): string;
