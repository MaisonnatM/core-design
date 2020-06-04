import React, { FunctionComponent } from 'react'
import { Styled, TStyleProps } from './Input.styles'

type TProps = {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void

  placeholder?: string
  type?: 'text' | 'password'
  autoFocus?: boolean
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void
} & TStyleProps

export const Input: FunctionComponent<TProps> = ({ ...props }) => {
  return <Styled.Input {...props} />
}

export type TInput = TProps

Input.defaultProps = {
  type: 'text',
}
