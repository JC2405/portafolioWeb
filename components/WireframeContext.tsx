'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface WireframeContextValue {
  isWireframe: boolean
  toggle: () => void
}

const WireframeContext = createContext<WireframeContextValue>({
  isWireframe: false,
  toggle: () => {},
})

export function WireframeProvider({ children }: { children: ReactNode }) {
  const [isWireframe, setIsWireframe] = useState(false)
  return (
    <WireframeContext.Provider value={{ isWireframe, toggle: () => setIsWireframe((v) => !v) }}>
      {children}
    </WireframeContext.Provider>
  )
}

export function useWireframe() {
  return useContext(WireframeContext)
}
