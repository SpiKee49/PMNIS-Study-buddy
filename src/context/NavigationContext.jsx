import { createContext, useContext, useState } from 'react'

const NavigationContext = createContext(null)

export function NavigationProvider({ children }) {
  const [screen, setScreen] = useState('splash')
  const [history, setHistory] = useState([])
  const [params, setParams] = useState({})

  const navigate = (to, newParams = {}) => {
    setHistory(h => [...h, { screen, params }])
    setScreen(to)
    setParams(newParams)
  }

  const goBack = () => {
    if (history.length > 0) {
      const prev = history[history.length - 1]
      setHistory(h => h.slice(0, -1))
      setScreen(prev.screen)
      setParams(prev.params || {})
    }
  }

  const reset = (to, newParams = {}) => {
    setHistory([])
    setScreen(to)
    setParams(newParams)
  }

  return (
    <NavigationContext.Provider value={{ screen, params, navigate, goBack, reset }}>
      {children}
    </NavigationContext.Provider>
  )
}

export function useNav() {
  return useContext(NavigationContext)
}
