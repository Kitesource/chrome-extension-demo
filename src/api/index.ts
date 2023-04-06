import axios from './axios'

const HOST = 'http://gpttools.shulex.com:8090'
const urlPrefix = '/api'

const urls: Record<string, string> = {
  analysis: '/v1/analysis/reviews',
}

Object.keys(urls).map((url: string) => {
  urls[url] = HOST + urlPrefix + urls[url]
  return url
})

console.log('urls', urls.analysis)

export const getAnalysisReviews = (data: {reviews: string[]}) =>
  axios.post(urls.analysis, data) as Promise<any>
