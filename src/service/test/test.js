import { gsRequest } from '../index'
export function requestTest() {
  return gsRequest.get({
    url: 'https://www.httpbin.org/get'
  })
}
