import { useContext } from 'react'

import { Theme, THEME_KEY, ThemeContext } from './ThemeContext'

interface UseThemeProps {
  theme: Theme
  toggleTheme: () => void
}

export const useTheme = (): UseThemeProps => {
  const { theme, setTheme } = useContext(ThemeContext)
  const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT

  const toggleTheme = () => {
    if (setTheme) {
      setTheme(newTheme)
    }
    localStorage.setItem(THEME_KEY, newTheme)
  }

  document.body.className = newTheme

  return { theme: theme!, toggleTheme }
}
