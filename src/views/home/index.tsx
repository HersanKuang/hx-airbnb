import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { HomeWrapper } from '@/views/home/style'
import HomeBanner from '@/views/home/c-cpns/home-banner'
import { fetchHomeDataAction } from '@/store/modules/home'
import { shallowEqualApp, useAppDispatch, useAppSelector } from '@/store'
import { isEmptyO } from '@/utils'
import HomeSectionV1 from '@/views/home/c-cpns/home-section-v1'
import HomeSectionV2 from '@/views/home/c-cpns/home-section-v2'
import HomeLongfor from '@/views/home/c-cpns/home-longfor'
import HomeSectionV3 from './c-cpns/home-section-v3'

interface IProps {
  children?: ReactNode
}

const Home: FC<IProps> = () => {
  /** 从redux中获取数据 */
  const {
    goodPriceInfo,
    highScoreInfo,
    discountInfo,
    hotRecommendInfo,
    longForInfo,
    plusInfo
  } = useAppSelector(
    (state) => ({
      hotRecommendInfo: state.home.hotRecommendInfo,
      discountInfo: state.home.discountInfo,
      longForInfo: state.home.longForInfo,
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      plusInfo: state.home.plusInfo
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
        {isEmptyO(hotRecommendInfo) && (
          <HomeSectionV2 infoData={hotRecommendInfo} />
        )}
        {isEmptyO(discountInfo) && <HomeSectionV2 infoData={discountInfo} />}
        {isEmptyO(longForInfo) && <HomeLongfor infoData={longForInfo} />}
        {isEmptyO(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo} />}
        {isEmptyO(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo} />}
        {isEmptyO(plusInfo) && <HomeSectionV3 infoData={plusInfo} />}
      </div>
    </HomeWrapper>
  )
}

export default memo(Home)
