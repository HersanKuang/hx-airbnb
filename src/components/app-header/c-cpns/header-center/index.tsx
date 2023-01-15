import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { CenterWrapper } from '@/components/app-header/c-cpns/header-center/style'

interface IProps {
  children?: ReactNode
}

const HeaderCenter: FC<IProps> = () => {
  return <CenterWrapper>HeaderCenter</CenterWrapper>
}

export default memo(HeaderCenter)
