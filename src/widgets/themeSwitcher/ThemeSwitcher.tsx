import { Button } from 'shared'
import { useTheme } from 'app/providers/theme'

export const ThemeSwitcher = () => {
  const { toggleTheme } = useTheme()

  return <Button onClick={toggleTheme}>Theme</Button>
}
