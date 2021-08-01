import React, {
  createContext,
  useCallback,
  useContext,
  useState,
  useEffect,
} from 'react'

import { Appearance } from 'react-native'
import { ThemeProvider as StyledProvider } from 'styled-components'
import ikindalikeyou from '../styles/themes/ikindalikeyou'

interface ThemeContextData {
  toggleTheme(): void
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData)

const ThemeProvider: React.FC = ({ children }) => {
  const deviceTheme = Appearance.getColorScheme()
  const [theme, setTheme] = useState(ikindalikeyou)


  const persistTheme = useCallback(async themeToPersist => {
    setTheme(ikindalikeyou)
  }, [])

  useEffect(() => {
    persistTheme(deviceTheme)
  }, [deviceTheme, persistTheme])

  const toggleTheme = useCallback(() => {
    persistTheme('ikindalikeyou')
  }, [theme.title, persistTheme])

  return (
    <StyledProvider theme={theme}>
      <ThemeContext.Provider value={{ toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </StyledProvider>
  )
}

function useTheme(): ThemeContextData {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  return context
}

export { ThemeProvider, useTheme }
