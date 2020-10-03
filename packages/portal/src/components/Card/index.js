import { ClayCardWithNavigation } from '@clayui/card'
import ClayIcon from '@clayui/icon'
import React from 'react'

const Component = ({ className, ...props }) => {
  return (
    <div style={{ width: 300 }} className={className}>
      <ClayCardWithNavigation
        {...props}
      >
        <ClayIcon symbol="page-template" />
      </ClayCardWithNavigation>
    </div>
  )
}

export default Component
