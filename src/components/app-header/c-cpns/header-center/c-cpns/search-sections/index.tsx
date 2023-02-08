import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { SectionsWrapper } from '@/components/app-header/c-cpns/header-center/c-cpns/search-sections/style'

interface IProps {
  children?: ReactNode
  searchInfos: any
}

const SearchSections: FC<IProps> = (props) => {
  const { searchInfos } = props
  return (
    <SectionsWrapper>
      {searchInfos.map((item: any, index: number) => {
        return (
          <div className="item" key={index}>
            <div className="info">
              <div className="title">{item.title}</div>
              <div className="desc">{item.desc}</div>
            </div>
            {index !== searchInfos.length - 1 && (
              <div className="divider"></div>
            )}
          </div>
        )
      })}
    </SectionsWrapper>
  )
}

export default memo(SearchSections)
