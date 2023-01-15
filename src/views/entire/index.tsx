import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { EntireWrapper } from '@/views/entire/style'

interface IProps {
  children?: ReactNode
}

const Entire: FC<IProps> = () => {
  return <EntireWrapper>Entire</EntireWrapper>
}

export default memo(Entire)
