import React from 'react'
import PropTypes from 'prop-types'
import './PageShell.css'
import { PageContextProvider } from './usePageContext'
import { childrenPropType } from './PropTypeValues'
import { UserContextProvider } from './useUserContext'

export { PageShell }

PageShell.propTypes = {
  pageContext: PropTypes.any,
  children: childrenPropType,
}
function PageShell({ pageContext, children }) {
  return (
    <React.StrictMode>
      <UserContextProvider>
        <PageContextProvider pageContext={pageContext}>
          {children}
        </PageContextProvider>
      </UserContextProvider>
    </React.StrictMode>
  )
}
