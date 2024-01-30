import type { FC, ReactNode } from 'react'
import React, { memo, useEffect, useState } from 'react'
import classNames from 'classnames'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { BrowserWrapper } from '@/base-ui/picture-browser/style'
import IconClose from '@/assets/svg/icon-close'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import IconTriangleArrowBottom from '@/assets/svg/icon-triangle-arrow-bottom'
import Indicator from '@/base-ui/indicator'
import IconTriangleArrowTop from '@/assets/svg/icon-triangle-arrow-top'

interface IProps {
  children?: ReactNode
  pictureUrls: any[]
  closeClick: () => any
}

const PictureBrowser: FC<IProps> = ({ pictureUrls, closeClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showList, setShowList] = useState(true)

  function closeBtnClickHandle() {
    closeClick && closeClick()
  }

  function controlClickHandle(isNext = true) {
    let newIndex = isNext ? currentIndex + 1 : currentIndex - 1
    if (newIndex < 0) newIndex = pictureUrls.length - 1
    if (newIndex > pictureUrls.length - 1) newIndex = 0
    setCurrentIndex(newIndex)
  }

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  return (
    <BrowserWrapper showList={showList}>
      <div className="top">
        <div className="close-btn" onClick={closeBtnClickHandle}>
          <IconClose />
        </div>
      </div>
      <div className="slider">
        <div className="control">
          <div className="btn left" onClick={() => controlClickHandle(false)}>
            <IconArrowLeft width={77} height={77} />
          </div>
          <div className="btn right" onClick={() => controlClickHandle()}>
            <IconArrowRight width={77} height={77} />
          </div>
        </div>
        <div className="picture">
          <SwitchTransition mode="out-in">
            <CSSTransition
              classNames="pic"
              key={pictureUrls[currentIndex]}
              timeout={150}
            >
              <img src={pictureUrls[currentIndex]} alt="" />
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
      <div className="preview">
        <div className="info">
          <div className="desc">
            <div className="count">
              <span>
                {currentIndex + 1}/{pictureUrls.length}
              </span>
              <span>room Apartment图片{currentIndex + 1}</span>
            </div>
            <div className="toggle" onClick={() => setShowList(!showList)}>
              <span>{showList ? '隐藏' : '显示'}隐藏图片列表</span>
              {showList ? (
                <IconTriangleArrowBottom />
              ) : (
                <IconTriangleArrowTop />
              )}
            </div>
          </div>
          <div className="list">
            <Indicator selectIndex={currentIndex}>
              {pictureUrls.map((item, index) => (
                <div
                  className={classNames('item', {
                    active: currentIndex === index
                  })}
                  onClick={() => setCurrentIndex(index)}
                  key={item}
                >
                  <img src={item} alt="" />
                </div>
              ))}
            </Indicator>
          </div>
        </div>
      </div>
    </BrowserWrapper>
  )
}

export default memo(PictureBrowser)
