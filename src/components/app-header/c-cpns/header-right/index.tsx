import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { RightWrapper } from '@/components/app-header/c-cpns/header-right/style'

interface IProps {
  children?: ReactNode
}

const HeaderRight: FC<IProps> = () => {
  return <RightWrapper>HeaderRight</RightWrapper>
}

export default memo(HeaderRight)
