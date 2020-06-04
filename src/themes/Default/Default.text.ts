/**
 * TEXT FONT
 */
type TTextFontEnum = 'title' | 'default'
type TTextFont = { [key in TTextFontEnum]: string }

const font: TTextFont = {
  title: '',
  default: '',
}

/**
 * TEXT SIZE
 */
type TTextSizeEnum = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'
type TTextSize = { [key in TTextSizeEnum]: { size: string; height: string } }

const size: TTextSize = {
  xsmall: { size: '1.1rem', height: '1.4rem' },
  small: { size: '1.4rem', height: '1.6rem' },
  medium: { size: '1.6rem', height: '2rem' },
  large: { size: '2rem', height: '3rem' },
  xlarge: { size: '2.8rem', height: '3.6rem' },
}

/**
 * TEXT WEIGHT
 */
type TTextWeightEnum = 'regular' | 'medium' | 'bold'
type TTextWeight = { [key in TTextWeightEnum]: string }

const weight: TTextWeight = {
  regular: '400',
  medium: '500',
  bold: '700',
}

/**
 * EXPORT
 */

export type TText = { size: TTextSize; weight: TTextWeight; font: TTextFont }
export const text: TText = {
  size,
  weight,
  font,
}
