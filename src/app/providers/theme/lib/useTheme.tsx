import React, {useContext} from 'react'
import {Theme, THEME_KEY, ThemeContext} from 'app/providers/theme/lib/ThemeContext'

interface UseThemeProps {
  theme: Theme
  toggleTheme: () => void
}

export const useTheme = (): UseThemeProps => {
  const {theme, setTheme} = useContext(ThemeContext)

  const toggleTheme = ()=>{
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    setTheme(newTheme)
    localStorage.setItem(THEME_KEY, newTheme)
  }

  return { theme, toggleTheme}
}
