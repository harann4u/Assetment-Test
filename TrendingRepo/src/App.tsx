
import { ThemeProvider } from 'styled-components';
import './App.css'
import { HomePage } from './pages/homePages/homePage'

import { createGlobalStyle } from 'styled-components';
import { darkTheme, lightTheme } from './util/theme/theme';

const GlobalStyled = createGlobalStyle`
 html, body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }
`

function App() {
  const isDark = false;
  return (
    <>
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
       <GlobalStyled />
        <HomePage/>
        </ThemeProvider>
    </>
  )
}

export default App
