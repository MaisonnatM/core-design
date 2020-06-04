import React, { FunctionComponent } from 'react'

import { TButton } from '../Button'
import { Styled } from './Primary.styles'

type TProps = {} & TButton

export const Primary: FunctionComponent<TProps> = ({ ...props }) => {
  return <Styled.Button {...props} />
}
