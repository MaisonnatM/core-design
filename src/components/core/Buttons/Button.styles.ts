import styled from '@emotion/styled'

type TButtonProps = {}

const Button = styled('button')<TButtonProps>(() => {
  return {
    '&:disabled': {
      cursor: 'not-allowed',
    },
  }
})

export const Styled = {
  Button,
}

export type TStyleProps = {} & TButtonProps
