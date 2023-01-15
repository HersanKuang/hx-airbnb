import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { LeftWrapper } from '@/components/app-header/c-cpns/header-left/style'

interface IProps {
  children?: ReactNode
}

const HeaderLeft: FC<IProps> = () => {
  return <LeftWrapper>HeaderLeft</LeftWrapper>
}

export default memo(HeaderLeft)
