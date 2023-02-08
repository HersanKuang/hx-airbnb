import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from '@/router'
import AppHeader from '@/components/app-header'
import { useScrollTop } from '@/hooks'

interface IProps {
  children?: ReactNode
}

const App: FC<IProps> = () => {
  /** 切换路由时滚到页面顶部 */
  useScrollTop()

  return (
    <div className="app">
      <AppHeader />
      <div className="page">{useRoutes(routes)}</div>
    </div>
  )
}

export default memo(App)
