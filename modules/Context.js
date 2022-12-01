import { useContext, createContext, useState } from 'react'

const StateContext = createContext()
const SetStateContext = createContext()

export const ContextProvider = ({ children }) => {
  const [state, setState] = useState(0)
  return (
    <SetStateContext.Provider value={setState}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </SetStateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext)
export const useSetStateContext = () => useContext(SetStateContext)
