import { useDarkMode, DarkMode } from '@/hooks/useDarkMode';
import SelectionDropdown from './SelectionDropdown';

export default function DarkModeDropdown() {
  const { darkMode, setDarkMode } = useDarkMode()
  const options = [
    { value: 'auto', label: 'Dark Mode: System' },
    { value: 'light', label: 'Light Mode' },
    { value: 'dark', label: 'Dark Mode' },
  ]

  return (
    <SelectionDropdown
      options={options}
      selected={darkMode}
      onOptionSelected={ (option) => setDarkMode(option as DarkMode) }
    />
  )
}
