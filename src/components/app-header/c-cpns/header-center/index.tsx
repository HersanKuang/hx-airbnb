import React, { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { CenterWrapper } from '@/components/app-header/c-cpns/header-center/style'
import IconSearchBar from '@/assets/svg/icon-search-bar'
import SearchTabs from '@/components/app-header/c-cpns/header-center/c-cpns/search-tabs'
import searchTitles from '@/assets/data/search_titles.json'
import SearchSections from '@/components/app-header/c-cpns/header-center/c-cpns/search-sections'
import { CSSTransition } from 'react-transition-group'

interface IProps {
  children?: ReactNode
  isSearch: boolean
  searchBarClick: () => void
}

const HeaderCenter: FC<IProps> = (props) => {
  const { isSearch, searchBarClick } = props
  const [tabIndex, setTabIndex] = useState(0)
  const titles = searchTitles.map((item) => item.title)
  function searchBarClickHandle() {
    searchBarClick && searchBarClick()
  }
  return (
    <CenterWrapper>
      <CSSTransition
        in={!isSearch}
        classNames="bar"
        timeout={250}
        unmountOnExit={true}
      >
        <div className="search-bar" onClick={searchBarClickHandle}>
          <div className="text">搜索房源和体验</div>
          <div className="icon">
            <IconSearchBar />
          </div>
        </div>
      </CSSTransition>
      <CSSTransition
        in={isSearch}
        classNames="detail"
        timeout={250}
        unmountOnExit={true}
      >
        <div className="search-detail">
          <SearchTabs titles={titles} tabClick={setTabIndex} />
          <div className="infos">
            <SearchSections searchInfos={searchTitles[tabIndex].searchInfos} />
          </div>
        </div>
      </CSSTransition>
    </CenterWrapper>
  )
}

export default memo(HeaderCenter)
