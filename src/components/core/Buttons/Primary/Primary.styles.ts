import styled from '@emotion/styled'
import { Button } from '../Button'

export type TStyleProps = {} & TPrimaryButtonProps

type TPrimaryButtonProps = {}

const PrimaryButton = styled(Button)<TPrimaryButtonProps>(() => {
  return {}
})

export const Styled = {
  Button: PrimaryButton,
}
