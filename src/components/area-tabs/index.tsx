import React, { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { Button } from '@mui/material'
import classNames from 'classnames'
import { TabsWrapper } from '@/components/area-tabs/style'

interface IProps {
  children?: ReactNode
  tabNames: string[]
  tabClick: (index: number, name: string) => void
}

const AreaTabs: FC<IProps> = (props) => {
  const { tabNames = [], tabClick } = props
  const [currentIndex, setCurrentIndex] = useState(0)
  function itemClickHandle(index: number, item: string) {
    setCurrentIndex(index)
    tabClick(index, item)
  }

  return (
    <TabsWrapper>
      <div className="tabs">
        {tabNames.map((item, index) => (
          <Button
            className={classNames('item', { active: index === currentIndex })}
            variant="contained"
            onClick={() => itemClickHandle(index, item)}
            key={item}
          >
            {item}
          </Button>
        ))}
      </div>
    </TabsWrapper>
  )
}

export default memo(AreaTabs)
