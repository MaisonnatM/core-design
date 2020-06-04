import React, { FunctionComponent } from 'react'

import { TInput } from '../Input'
import { Styled } from './Rounded.styles'

type TProps = {} & TInput

export const Rounded: FunctionComponent<TProps> = ({ ...props }) => {
  return <Styled.Input {...props} />
}
