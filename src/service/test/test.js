import { gsRequest } from '../index'
export function requestTest() {
  return gsRequest.get({
    url: 'https://www.httpbin.org/get'
  })
}

export function requestModel() {
  return gsRequest.get({
    url: '/api/Api/Upload/DownloadFile?sid=1709409274347618304'
  })
}
