import { useTheme } from 'app/providers/theme'
import { Button } from 'shared'

export const ThemeSwitcher = () => {
  const { toggleTheme } = useTheme()

  return <Button onClick={toggleTheme}>Theme</Button>
}
