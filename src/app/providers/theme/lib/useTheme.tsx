import { Theme, THEME_KEY, ThemeContext } from 'app/providers/theme/lib/ThemeContext'
import { useContext } from 'react'

interface UseThemeProps {
  theme: Theme
  toggleTheme: () => void
}

export const useTheme = (): UseThemeProps => {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT

    if (setTheme) {
      setTheme(newTheme)
    }
    localStorage.setItem(THEME_KEY, newTheme)
  }

  return { theme: theme!, toggleTheme }
}
