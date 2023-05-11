/**
 * Represents a color set consisting of a background color and a visible text color based on that background color.
 */
export interface ColorSet {
  /**
   * The background color code.
   */
  backgroundColor: string

  /**
   * The text color code that is visible on the background color.
   */
  textColor: '#000000' | '#FFFFFF'
}

/**
 * Represents an RGB color with red, green, and blue values.
 */
export interface RGBColor {
  /**
   * The red value of the color (0-255).
   */
  r: number

  /**
   * The green value of the color (0-255).
   */
  g: number

  /**
   * The blue value of the color (0-255).
   */
  b: number
}

/**
 * Calculates the luminance of an RGB color.
 * @param {number} r The red value of the color (0-255).
 * @param {number} g The green value of the color (0-255).
 * @param {number} b The blue value of the color (0-255).
 * @return {number} The luminance of the color (0-1).
 */
export function calculateLuminance(r: number, g: number, b: number): number {
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255
}

/**
 * Extracts RGB values from a color code string in the format "#RRGGBB".
 * @param {string} colorCode The color code string to extract RGB values from.
 * @return {object} An object with "r", "g", and "b" properties representing the red, green, and blue values.
 */
export function extractRGB(colorCode: string): RGBColor {
  const r = parseInt(colorCode.slice(1, 3), 16)
  const g = parseInt(colorCode.slice(3, 5), 16)
  const b = parseInt(colorCode.slice(5, 7), 16)
  return { r, g, b }
}

/**
 * Generates a color set consisting of a background color and a visible text color based on that background color.
 * @param {string} backgroundColor The background color code to use.
 * @return {ColorSet} An object with "backgroundColor" and "textColor" properties.
 */
export function generateColorSet(backgroundColor: string): ColorSet {
  // Extract RGB values from the background color
  const { r, g, b } = extractRGB(backgroundColor)

  // Calculate the luminance of the background color
  const luminance = calculateLuminance(r, g, b)

  // Determine the appropriate text color based on the background color's luminance
  const textColor: ColorSet['textColor'] =
    luminance > 0.5 ? '#000000' : '#FFFFFF'

  // Return an object with the background and text colors
  return {
    backgroundColor: backgroundColor,
    textColor: textColor,
  }
}

/**
 * Generates a random color set consisting of a background color and a visible text color based on that background color.
 * @return {ColorSet} An object with "backgroundColor" and "textColor" properties.
 */
export function generateRandomColorSet(): ColorSet {
  const backgroundColor = getRandomColor()
  return generateColorSet(backgroundColor)
}

/**
 * Generates a random color code in the format "#RRGGBB".
 * @return {string} A random color code.
 */
export function getRandomColor(): string {
  return '#' + Math.floor(Math.random() * 16777215).toString(16)
}
