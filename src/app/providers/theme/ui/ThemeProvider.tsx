import React, {FC, ReactNode, useMemo, useState} from 'react'
import {Theme, THEME_KEY, ThemeContext} from 'app/providers/theme/lib/ThemeContext'

interface ThemeProviderProps {
  children: ReactNode
}

const defaultTheme = localStorage.getItem(THEME_KEY) as Theme || Theme.LIGHT

export const ThemeProvider: FC<ThemeProviderProps> = ({children}) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme)

  const defaultValue = useMemo(() => ({
    theme: theme,
    setTheme: setTheme
  }), [theme])

  return (
    <ThemeContext.Provider value={defaultValue}>
      {children}
    </ThemeContext.Provider>
  )
}
