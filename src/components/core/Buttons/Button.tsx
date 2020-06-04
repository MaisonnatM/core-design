import React, { FunctionComponent } from 'react'
import { Styled, TStyleProps } from './Button.styles'

type TProps = {
  disabled?: boolean
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  type?: 'button' | 'submit'
} & TStyleProps

export const Button: FunctionComponent<TProps> = ({ ...props }) => {
  return <Styled.Button {...props} />
}

export type TButton = TProps

Button.defaultProps = {
  disabled: false,
  type: 'button',
}
