import styled from '@emotion/styled'

type TInputProps = {}

const Input = styled('input')<TInputProps>(() => {
  return {}
})

export const Styled = {
  Input,
}

export type TStyleProps = {} & TInputProps
