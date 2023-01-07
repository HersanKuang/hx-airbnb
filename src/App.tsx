import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from '@/router'

interface IProps {
  children?: ReactNode
}

const App: FC<IProps> = () => {
  return (
    <div className="app">
      <div className="header">header</div>
      <div className="page">{useRoutes(routes)}</div>
      <div className="footer">footer</div>
    </div>
  )
}

export default memo(App)
