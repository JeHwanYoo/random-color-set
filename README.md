# random-color-set

A library for generating random color sets consisting of a background color and a visible text color based on that
background color.

## Installation

```bash
npm install random-color-set
```

## Usage

### CommonJS

```javascript
const { generateRandomColorSet } = require('random-color-set')

const colorSet = generateRandomColorSet()
console.log(colorSet)
// { backgroundColor: '#c77d0e', textColor: '#FFFFFF' }
```

### ESM

```javascript
import { generateRandomColorSet } from 'random-color-set'

const colorSet = generateRandomColorSet()
console.log(colorSet)
// { backgroundColor: '#1dc660', textColor: '#FFFFFF' }
```

## API

### generateRandomColorSet(): ColorSet

Generates a random color set consisting of a background color and a visible text color based on that background color.

#### Returns:

- ColorSet: An object with `backgroundColor` and `textColor` properties.

### generateColorSet(backgroundColor: string): ColorSet

Generates a color set consisting of a background color and a visible text color based on that background color.

#### Parameters:

backgroundColor (string): The background color code to use.

#### Returns:

- ColorSet: An object with `backgroundColor` and `textColor` properties.

### getRandomColor(): string

Generates a random color code in the format "#RRGGBB".

#### Returns:

- string: A random color code.

### extractRGB(colorCode: string): { r: number, g: number, b: number }

Extracts RGB values from a color code string in the format "#RRGGBB".

#### Parameters:

- colorCode (string): The color code string to extract RGB values from.

#### Returns:

- RGBColor: An object with `r`, `g`, and `b` properties representing the red, green, and blue values.

### calculateLuminance(r: number, g: number, b: number): number

Calculates the luminance of an RGB color.

#### Parameters:

- r (number): The red value of the color (0-255).
- g (number): The green value of the color (0-255).
- b (number): The blue value of the color (0-255).

#### Returns:

- number: The luminance of the color (0-1).

## License

MIT