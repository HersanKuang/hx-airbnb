import React, { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import classNames from 'classnames'
import { TabsWrapper } from '@/components/app-header/c-cpns/header-center/c-cpns/search-tabs/style'

interface IProps {
  children?: ReactNode
  titles: string[]
  tabClick: (index: number) => any
}

const SearchTabs: FC<IProps> = (props) => {
  const { titles, tabClick } = props
  const [currentIndex, setCurrentIndex] = useState(0)

  function itemClickHandle(index: number) {
    setCurrentIndex(index)
    if (tabClick) tabClick(index)
  }
  return (
    <TabsWrapper>
      {titles.map((item: string, index: number) => {
        return (
          <div
            className={classNames('item', { active: currentIndex === index })}
            key={item}
            onClick={() => itemClickHandle(index)}
          >
            <span className="text">{item}</span>
            <span className="bottom"></span>
          </div>
        )
      })}
    </TabsWrapper>
  )
}

export default memo(SearchTabs)
