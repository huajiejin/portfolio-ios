import { useEffect } from 'react'
import { useDarkMode } from './useDarkMode'

export function useSystemDarkModeListener() {
	const { darkMode, setDarkMode } = useDarkMode()

	useEffect(() => {
		// Listen for changes to the system dark mode preference
		const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
		const darkModeChangeHandler = (_: MediaQueryListEvent) => {
			setDarkMode(darkMode)
		}
		darkModeMediaQuery.addEventListener('change', darkModeChangeHandler)
		return () => {
			darkModeMediaQuery.removeEventListener('change', darkModeChangeHandler)
		}
	}, [darkMode])
}
