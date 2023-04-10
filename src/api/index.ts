const HOST = 'http://gpttools.shulex.com:8090'
const urlPrefix = '/api'

const urls: Record<string, string> = {
  analysis: '/v1/analysis/reviews',
}

Object.keys(urls).map((url: string) => {
  urls[url] = HOST + urlPrefix + urls[url]
  return url
})

export default urls
