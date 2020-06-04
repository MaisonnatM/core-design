type TSpacingsEnum = 'none' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'

export type TSpacing = { [key in TSpacingsEnum]: string }

export const spacing: TSpacing = {
  none: '0',
  xsmall: '0.4rem',
  small: '0.8rem',
  medium: '1.6rem',
  large: '2.4rem',
  xlarge: '3.2rem',
}
