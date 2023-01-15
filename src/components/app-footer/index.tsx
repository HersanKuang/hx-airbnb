import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { AppFooterWrapper } from '@/components/app-footer/style'

interface IProps {
  children?: ReactNode
}

const AppFooter: FC<IProps> = () => {
  return <AppFooterWrapper>AppFooter</AppFooterWrapper>
}

export default memo(AppFooter)
