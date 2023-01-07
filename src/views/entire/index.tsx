import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Entire: FC<IProps> = () => {
  return <div>Entire</div>
}

export default memo(Entire)
