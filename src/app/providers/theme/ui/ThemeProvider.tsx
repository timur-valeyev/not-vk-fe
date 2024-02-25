import React, { FC, ReactNode, useMemo, useState } from 'react'

import { Theme, THEME_KEY, ThemeContext } from '../lib/ThemeContext'

interface ThemeProviderProps {
  children: ReactNode
  initialTheme?: Theme
}

const defaultTheme = (localStorage.getItem(THEME_KEY) as Theme) || Theme.LIGHT

export const ThemeProvider: FC<ThemeProviderProps> = ({ children, initialTheme }) => {
  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme)

  const defaultValue = useMemo(
    () => ({
      theme,
      setTheme
    }),
    [theme]
  )

  return <ThemeContext.Provider value={defaultValue}>{children}</ThemeContext.Provider>
}
