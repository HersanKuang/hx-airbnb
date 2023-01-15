import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { CenterWrapper } from '@/components/app-header/c-cpns/header-center/style'
import IconSearchBar from '@/assets/svg/icon-search-bar'

interface IProps {
  children?: ReactNode
}

const HeaderCenter: FC<IProps> = () => {
  return (
    <CenterWrapper>
      <div className="search-bar">
        <div className="text">搜索房源和体验</div>
        <div className="icon">
          <IconSearchBar />
        </div>
      </div>
    </CenterWrapper>
  )
}

export default memo(HeaderCenter)
