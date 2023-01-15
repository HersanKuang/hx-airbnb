import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { BannerWrapper } from '@/views/home/c-cpns/home-banner/style'

interface IProps {
  children?: ReactNode
}

const HomeBanner: FC<IProps> = () => {
  return <BannerWrapper />
}

export default memo(HomeBanner)
