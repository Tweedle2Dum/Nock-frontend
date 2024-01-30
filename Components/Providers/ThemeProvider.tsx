import { ThemeProvider, createTheme } from '@mui/material'
import React, { ReactNode } from 'react'

type Props = {children:ReactNode}

const CustomThemeProvider = (props: Props) => {
    const theme = createTheme({
        typography:{
            fontFamily:'ProductSans',
        }
    })
  return (
    <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
  )
}

export default CustomThemeProvider