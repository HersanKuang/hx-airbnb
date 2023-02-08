import React, { memo, useRef, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { PicturesWrapper } from '@/views/detail/c-cpns/detail-pictures/style'
import PictureBrowser from '@/base-ui/picture-browser'

interface IProps {
  children?: ReactNode
  itemData: any
}

const DetailPictures: FC<IProps> = (props) => {
  const { itemData } = props
  const [showBrowser, setShowBrowser] = useState(false)
  const showBtnRef = useRef<HTMLButtonElement>(null)
  return (
    <PicturesWrapper>
      <div className="pictures">
        <div className="left">
          <div className="item" onClick={() => setShowBrowser(true)}>
            <img src={itemData.picture_urls[0]} alt="" />
            <div className="cover"></div>
          </div>
        </div>
        <div className="right">
          {itemData.picture_urls.slice(1, 5).map((item: string) => (
            <div
              className="item"
              key={item}
              onClick={() => setShowBrowser(true)}
            >
              <img src={item} alt="" />
              <div className="cover"></div>
            </div>
          ))}
        </div>
      </div>
      <button
        className="show-btn"
        onClick={() => setShowBrowser(true)}
        ref={showBtnRef}
      >
        显示照片
      </button>
      {showBrowser && (
        <PictureBrowser
          pictureUrls={itemData.picture_urls}
          closeClick={() => setShowBrowser(false)}
        />
      )}
    </PicturesWrapper>
  )
}

export default memo(DetailPictures)
