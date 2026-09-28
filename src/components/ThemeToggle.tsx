'use client'

import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light'
  }, [dark])

  return (
    <button type="button" onClick={() => setDark(!dark)}>
      {dark ? 'Light mode' : 'Dark mode'}
    </button>
  )
}
