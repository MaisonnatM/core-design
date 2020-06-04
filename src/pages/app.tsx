import React, { FunctionComponent } from 'react'
import { Button } from 'components/core/Buttons'
import { Provider } from 'hoc/providers'
import { Input } from 'components/core/Inputs'

export const App: FunctionComponent = () => {
  return (
    <Provider.Theme>
      <Button.Default>Hello world</Button.Default>
      <Input.Rounded value="Hello world" onChange={(e) => console.log(e)} />
    </Provider.Theme>
  )
}
