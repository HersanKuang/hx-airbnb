import React, { memo, useRef, useState } from 'react'
import type { FC, ReactNode } from 'react'
import classNames from 'classnames'
import { ThemeProvider } from 'styled-components'
import { HeaderWrapper, SearchAreaWrapper } from '@/components/app-header/style'
import HeaderLeft from '@/components/app-header/c-cpns/header-left'
import HeaderCenter from '@/components/app-header/c-cpns/header-center'
import HeaderRight from '@/components/app-header/c-cpns/header-right'
import { shallowEqualApp, useAppSelector } from '@/store'
import { useScrollPosition } from '@/hooks'

interface IProps {
  children?: ReactNode
}

const AppHeader: FC<IProps> = () => {
  const [isSearch, setIsSearch] = useState(false)
  const prevY = useRef(0)
  /** 从redux中获取数据 */
  const { headerConfig } = useAppSelector(
    (state) => ({
      headerConfig: state.main.headerConfig
    }),
    shallowEqualApp
  )
  const { isFixed, topAlpha } = headerConfig
  const { scrollY } = useScrollPosition()
  if (!isSearch) prevY.current = scrollY
  if (isSearch && Math.abs(scrollY - prevY.current) > 30) setIsSearch(false)
  const isAlpha = topAlpha && scrollY === 0

  return (
    <ThemeProvider theme={{ isAlpha }}>
      <HeaderWrapper className={classNames({ fixed: isFixed })}>
        <div className="content">
          <div className="top">
            <HeaderLeft />
            <HeaderCenter
              isSearch={isAlpha || isSearch}
              searchBarClick={() => setIsSearch(true)}
            />
            <HeaderRight />
          </div>
          <SearchAreaWrapper isSearch={isAlpha || isSearch} />
        </div>
        {isSearch && (
          <div className="cover" onClick={() => setIsSearch(false)}></div>
        )}
      </HeaderWrapper>
    </ThemeProvider>
  )
}

export default memo(AppHeader)
