import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'

import { useTheme } from '../../hooks/theme'

import { Container, Button, Text } from './styles'

const ThemeSwitcher: React.FC = () => {
  const { title } = useContext(ThemeContext)
  const { toggleTheme } = useTheme()

  return (
    <Container>
      <Button onPress={toggleTheme}>
      {title === 'light' ? (
          <Text> Button1 </Text>
        ) : (
          <Text> Button2 </Text>
        )}
      </Button>
    </Container>
  )
}

export default ThemeSwitcher
