import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { AppHeaderWrapper } from '@/components/app-header/style'
import HeaderLeft from '@/components/app-header/c-cpns/header-left'
import HeaderCenter from '@/components/app-header/c-cpns/header-center'
import HeaderRight from '@/components/app-header/c-cpns/header-right'

interface IProps {
  children?: ReactNode
}

const AppHeader: FC<IProps> = () => {
  return (
    <AppHeaderWrapper>
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </AppHeaderWrapper>
  )
}

export default memo(AppHeader)
