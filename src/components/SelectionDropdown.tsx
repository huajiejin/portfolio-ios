import { useState, useRef, useEffect, useLayoutEffect } from 'react'
import { createPortal } from 'react-dom'
import { ChevronDownIcon } from '@heroicons/react/24/solid'

type Option = {
  value: string
  label: string
}

type SelectionDropdownProps = {
	options: readonly Option[]
	selected: string
	onOptionSelected: (optionValude: string) => void
}

let idCounter = 0

export const SelectionDropdown: React.FC<SelectionDropdownProps> = ({ options, selected, onOptionSelected }) => {
  const dropdownToggleRef = useRef(null)
  const dropdownMenuRef = useRef(null)

  const [isOpen, setIsOpen] = useState(false)
  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const [labelId, setLabelId] = useState('');
  const [menuId, setMenuId] = useState('');
  useLayoutEffect(() => {
    const id = idCounter++
    setLabelId(`dropdown-label-${id}`)
    setMenuId(`dropdown-menu-${id}`)
  }, [])

  // Position the dropdown menu before it's rendered
  const [dropdownMenuPosition, setDropdownMenuPosition] = useState({ left: 0, top: 0, transformOrigin: 'top'})
  useLayoutEffect(() => {
    if (isOpen && dropdownToggleRef.current && dropdownMenuRef.current) {
      const toggleRect = (dropdownToggleRef.current as HTMLElement).getBoundingClientRect()
      const menuRect = (dropdownMenuRef.current as HTMLElement).getBoundingClientRect()

      const left = toggleRect.left + window.scrollX

      let top = 0
      let transformOrigin = 'top'
      const gap = 4
      // Position the dropdown menu under the toggle button if there's enough space, otherwise above
      if (window.innerHeight - toggleRect.bottom > menuRect.height + gap) {
        top = toggleRect.bottom + window.scrollY + gap
      } else {
        top = toggleRect.top + window.scrollY - menuRect.height - gap
        transformOrigin = 'bottom'
      }

      setDropdownMenuPosition({ left, top, transformOrigin })
    }
  }, [isOpen])
  const [dropdownMenuClassName, setDropdownMenuClassName] = useState('invisible')
  useEffect(() => {
    // Animate the dropdown menu after it's been positioned by the useLayoutEffect hook
    setDropdownMenuClassName( isOpen ? 'animate-grow-out' : '')
  }, [isOpen])

  // Close the dropdown when clicking outside
  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownToggleRef.current && dropdownMenuRef.current
        && !(dropdownToggleRef.current as HTMLElement).contains(event.target as Node)
        && !(dropdownMenuRef.current as HTMLElement).contains(event.target as Node)) {
        setIsOpen(false)
    }
  }
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Create a portal for the dropdown menu to be rendered outside the current component
  const [dropdownMenuContainer, setDropdownMenuContainer] = useState<HTMLDivElement | null>(null)
  useEffect(() => {
    const container = document.createElement('div')
    container.classList.add('dropdown-menu-container')
    document.body.appendChild(container)
    setDropdownMenuContainer(container)
    return () => {
      document.body.removeChild(container)
    }
  }, [])

  return (
    <>
      <button
        id={labelId}
        className="flex items-center gap-1 text-clickable-2"
        ref={dropdownToggleRef}
        onClick={handleToggle}
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-controls={menuId}
        >
        <span>{options.find(option => option.value === selected)?.label}</span>
        <ChevronDownIcon className={`h-4 w-4 translate-y-[1px] transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && dropdownMenuContainer && createPortal(
        <div
          id={menuId}
          className={`dark-container-3 absolute rounded shadow ring-1 ring-black ring-opacity-5 ${dropdownMenuClassName}`}
          style={dropdownMenuPosition}
          ref={dropdownMenuRef}
          >
          <div role="menu" aria-orientation="vertical" aria-labelledby={labelId}>
            {options.map(option => (
              <button
                key={option.value}
                className={`text-clickable-3 block px-4 py-2 w-full text-left text-sm ${option.value === selected ? 'selected' : ''}`}
                role="menuitem"
                onClick={(e) => {
                  e.preventDefault()
                  onOptionSelected(option.value)
                  setIsOpen(false)
                }}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>,
        dropdownMenuContainer
      )}
    </>
  )
}

export default SelectionDropdown
