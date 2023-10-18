// 在根元素设置css变量
export const setCssVar = (prop, val, dom = document.documentElement) => {
  dom.style.setProperty(prop, val)
}
