import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { HomeWrapper } from '@/views/home/style'
import HomeBanner from '@/views/home/c-cpns/home-banner'
import { fetchHomeDataAction } from '@/store/modules/home'
import { shallowEqualApp, useAppDispatch, useAppSelector } from '@/store'
import AreaHeader from '@/components/area-header'
import AreaRooms from '@/components/area-rooms'

interface IProps {
  children?: ReactNode
}

const Home: FC<IProps> = () => {
  /** 从redux中获取数据 */
  const { goodPriceInfo, highScoreInfo } = useAppSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo
    }),
    shallowEqualApp
  )

  /** 派发异步事件：发送网络请求 */
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction())
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        <div className="good-price">
          <AreaHeader title={goodPriceInfo.title} />
          <AreaRooms roomList={goodPriceInfo.list?.slice(0, 8)} />
        </div>
        <div className="high-score">
          <AreaHeader
            title={highScoreInfo.title}
            subtitle={highScoreInfo.subtitle}
          />
          <AreaRooms roomList={highScoreInfo.list?.slice(0, 8)} />
        </div>
      </div>
    </HomeWrapper>
  )
}

export default memo(Home)
