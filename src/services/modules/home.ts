import hxRequest from '@/services'

export function getHomeGoodPriceData() {
  return hxRequest.get({
    url: '/home/goodprice'
  })
}

export function getHomeHighScoreData() {
  return hxRequest.get({
    url: '/home/highscore'
  })
}

export function getHomeDiscountData() {
  return hxRequest.get({
    url: '/home/discount'
  })
}

export function getHomeHotRecommendData() {
  return hxRequest.get({
    url: '/home/hotrecommenddest'
  })
}

export function getHomeLongForData() {
  return hxRequest.get({
    url: '/home/longfor'
  })
}

export function getHomePlusData() {
  return hxRequest.get({
    url: '/home/plus'
  })
}
