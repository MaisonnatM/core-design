import styled from '@emotion/styled'
import { Input } from '../Input'

export type TStyleProps = {} & TRoundedInputProps

type TRoundedInputProps = {}

const RoundedInput = styled(Input)<TRoundedInputProps>(() => {
  return {}
})

export const Styled = {
  Input: RoundedInput,
}
