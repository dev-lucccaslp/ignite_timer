import { defaultTheme } from './../styles/themes/default'
// eslint-disable-next-line no-unused-vars
import styled from 'styled-components'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
