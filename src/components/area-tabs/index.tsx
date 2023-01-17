import React, { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { Button } from '@mui/material'
import classNames from 'classnames'
import { TabsWrapper } from '@/components/area-tabs/style'
import theme from '@/assets/theme'

interface IProps {
  children?: ReactNode
  tabNames: string[]
}

const AreaTabs: FC<IProps> = (props) => {
  const { tabNames = [] } = props
  const [currentIndex, setCurrentIndex] = useState(0)
  function itemClickHandle(index: number) {
    setCurrentIndex(index)
  }

  return (
    <TabsWrapper>
      {tabNames.map((item, index) => (
        <Button
          className={classNames('item', { active: index === currentIndex })}
          variant="contained"
          onClick={() => itemClickHandle(index)}
          key={item}
        >
          {item}
        </Button>
      ))}
    </TabsWrapper>
  )
}

export default memo(AreaTabs)
