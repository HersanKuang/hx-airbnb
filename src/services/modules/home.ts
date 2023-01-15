import hxRequest from '@/services'

export function getHomeGoodPriceData() {
  return hxRequest.get({
    url: '/home/goodprice'
  })
}
