import { describe, expect } from 'vitest'
import {
  calculateLuminance,
  ColorSet,
  extractRGB,
  generateColorSet,
  generateRandomColorSet,
  getRandomColor,
  RGBColor,
} from '../src'

describe('random-color-set', (test) => {
  test('calculateLuminance', () => {
    expect(calculateLuminance(255, 255, 255)).to.equal(1)
    expect(calculateLuminance(0, 0, 0)).to.equal(0)
    expect(calculateLuminance(255, 0, 0)).to.closeTo(0.299, Number.EPSILON)
    expect(calculateLuminance(0, 255, 0)).to.closeTo(0.587, Number.EPSILON)
    expect(calculateLuminance(0, 0, 255)).to.closeTo(0.114, Number.EPSILON)
  })

  test('extractRGB', () => {
    const colorCode = '#FF0000'
    const expected: RGBColor = { r: 255, g: 0, b: 0 }
    expect(extractRGB(colorCode)).to.deep.equal(expected)
  })

  test('generateColorSet', () => {
    const backgroundColor = '#FF0000'
    const expected: ColorSet = {
      backgroundColor: backgroundColor,
      textColor: '#FFFFFF',
    }
    expect(generateColorSet(backgroundColor)).to.deep.equal(expected)
  })

  test('generateRandomColorSet', () => {
    const result = generateRandomColorSet()
    expect(result.backgroundColor).to.be.match(/^#[a-fA-F0-9]{6}$/i)
    expect(result.textColor).to.be.oneOf(['#000000', '#FFFFFF'])
  })

  test('getRandomColor', () => {
    const result = getRandomColor()
    expect(result).to.be.a('string')
    expect(result).to.match(/^#[a-fA-F0-9]{6}$/i)
  })
})
