import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { LeftWrapper } from '@/components/app-header/c-cpns/header-left/style'
import IconLogo from '@/assets/svg/icon_logo'

interface IProps {
  children?: ReactNode
}

const HeaderLeft: FC<IProps> = () => {
  return (
    <LeftWrapper>
      <div className="logo">
        <IconLogo />
      </div>
    </LeftWrapper>
  )
}

export default memo(HeaderLeft)
