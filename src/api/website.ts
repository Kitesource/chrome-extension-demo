const HOST = 'https://www.amazon.com'

const web_urls: Record<string, string> = {
  reviews: '/hz/reviews-render/ajax/reviews/get/ref=cm_cr_getr_d_paging_btm_next_<pageNum>',
}

Object.keys(web_urls).map((url: string) => {
  web_urls[url] = HOST + web_urls[url]
  return url
})

export default web_urls
