import { Dispatch, SetStateAction, useEffect, useState } from 'react'

export const darkModes = ['light', 'dark', 'auto'] as const
export type DarkMode = typeof darkModes[number]

// Create an simple event system
const darkModelisteners = new Set<Dispatch<SetStateAction<DarkMode>>>()

// Emit the new dark mode to all listeners
function setDarkModeStates(newDarkMode: DarkMode) {
  for (const setDarkModeState of Array.from(darkModelisteners)) {
    setDarkModeState(newDarkMode)
  }
}

// Set the new dark mode in local storage and on the document element,
//   and emitting the new dark mode.
const setDarkMode = (newDarkMode: DarkMode) => {
  if (!darkModes.includes(newDarkMode)) {
    return
  }
  if (localStorage) {
    localStorage.setItem('darkMode', newDarkMode)
  }
  if (window && document) {
    const isDark = newDarkMode === 'dark' || (newDarkMode === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches)
    document.documentElement.classList.toggle('dark', isDark)
  }
  setDarkModeStates(newDarkMode)
}

export function useDarkMode() {
  const [darkMode, setDarkModeState] = useState<DarkMode>('auto')

  useEffect(() => {
    // Add the setDarkModeState function to the listeners set when the component mounts
    darkModelisteners.add(setDarkModeState)

    // Check if the user has a preferred dark mode and set it
    const userPreferredDarkMode = localStorage.getItem('darkMode')
    setDarkMode(userPreferredDarkMode as DarkMode)

    // Remove the setDarkModeState function from the listeners set when the component unmounts
    return () => {
      darkModelisteners.delete(setDarkModeState)
    }
  }, [])

  return { darkMode, setDarkMode }
}
