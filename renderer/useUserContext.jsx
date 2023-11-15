// `usePageContext` allows us to access `pageContext` in any React component.
// See https://vike.dev/pageContext-anywhere

import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import { childrenPropType } from './PropTypeValues'

export { UserContextProvider }
// eslint-disable-next-line react-refresh/only-export-components
export { useUserContext }

const Context = React.createContext(undefined)

UserContextProvider.propTypes = {
  pageContext: PropTypes.any,
  children: childrenPropType,
}
function UserContextProvider({ children }) {
  const [user, setUser] = useState({})

  return (
    <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>
  )
}

function useUserContext() {
  const userContext = useContext(Context)

  console.log('user context', userContext)
  return userContext
}
