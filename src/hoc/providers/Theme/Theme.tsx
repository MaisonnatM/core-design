import React, { FunctionComponent } from 'react'
import { ThemeProvider } from 'emotion-theming'

import { Globals } from 'assets/styles/Globals/Globals'

type TProps = {}

export const Theme: FunctionComponent<TProps> = ({ children }) => {
  return (
    <>
      <Globals />
      <ThemeProvider theme={{}}>{children}</ThemeProvider>
    </>
  )
}
