'use client'

import { useEffect, useState } from 'react'
import { Monitor, Moon, Sun } from 'lucide-react'
import { DARK_QUERY, THEME_KEY } from '@/lib/theme'

type Mode = 'system' | 'light' | 'dark'

const options = [
  { mode: 'system', label: 'System theme', Icon: Monitor },
  { mode: 'light', label: 'Light theme', Icon: Sun },
  { mode: 'dark', label: 'Dark theme', Icon: Moon },
] as const

function apply(mode: Mode) {
  const dark = mode === 'dark' || (mode === 'system' && matchMedia(DARK_QUERY).matches)
  document.documentElement.dataset.theme = dark ? 'dark' : 'light'
}

function readSaved(): Mode {
  try {
    const saved = localStorage.getItem(THEME_KEY)
    return saved === 'light' || saved === 'dark' ? saved : 'system'
  } catch {
    return 'system'
  }
}

export function ThemeToggle() {
  const [mode, setMode] = useState<Mode | null>(null)

  useEffect(() => setMode(readSaved()), [])

  useEffect(() => {
    if (!mode) return
    apply(mode)
    if (mode !== 'system') return
    const media = matchMedia(DARK_QUERY)
    const onChange = () => apply('system')
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [mode])

  const choose = (next: Mode) => {
    try {
      if (next === 'system') localStorage.removeItem(THEME_KEY)
      else localStorage.setItem(THEME_KEY, next)
    } catch {}
    setMode(next)
  }

  return (
    <div
      role="group"
      aria-label="Color theme"
      className="inline-flex items-center gap-0.5 rounded-full border border-white/15 p-0.5"
    >
      {options.map(({ mode: option, label, Icon }) => (
        <button
          key={option}
          type="button"
          title={label}
          aria-label={label}
          aria-pressed={mode === option}
          onClick={() => choose(option)}
          className={`grid size-7 place-items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange ${
            mode === option ? 'bg-white/15 text-white' : 'text-white/50 hover:text-white'
          }`}
        >
          <Icon className="size-3.5" aria-hidden="true" />
        </button>
      ))}
    </div>
  )
}
