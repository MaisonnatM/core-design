import React, { FunctionComponent } from 'react'
import { Global, css } from '@emotion/core'

const styles = css`
  html,
  body {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    font-size: 16px;
  }

  ul {
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }

  * {
    outline: none;
  }
`

export const General: FunctionComponent = () => <Global styles={styles} />
