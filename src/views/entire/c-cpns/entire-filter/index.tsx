import React, { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import classNames from 'classnames'
import { Button } from '@mui/material'
import { FilterWrapper } from '@/views/entire/c-cpns/entire-filter/style'
import filterData from '@/assets/data/filter_data.json'

interface IProps {
  children?: ReactNode
}

const EntireFilter: FC<IProps> = () => {
  const [selectItems, setSelectItems] = useState<any[]>([])

  function itemClickHandle(item: string) {
    const newItems: any[] = [...selectItems]
    if (newItems.includes(item)) {
      const filterIndex = newItems.findIndex(
        (filterItem) => filterItem === item
      )
      newItems.splice(filterIndex, 1)
    } else {
      newItems.push(item)
    }
    setSelectItems(newItems)
  }

  return (
    <FilterWrapper>
      <div className="filter">
        {filterData.map((item) => (
          <Button
            className={classNames('item', {
              active: selectItems.includes(item)
            })}
            key={item}
            onClick={() => itemClickHandle(item)}
          >
            {item}
          </Button>
        ))}
      </div>
    </FilterWrapper>
  )
}

export default memo(EntireFilter)
