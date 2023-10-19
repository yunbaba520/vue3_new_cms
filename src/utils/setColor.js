import { isDarkColor, lighten } from '@/utils/color'

// 在根元素设置css变量
export const setCssVar = (prop, val, dom = document.documentElement) => {
  dom.style.setProperty(prop, val)
}
// 根据头部主题色 设置头部文字颜色等
export const setTopTextColorByTopThemeColor = (color) => {
  const isDark = isDarkColor(color)
  const textColor = isDark ? '#fff' : '#000'
  const textBgHoverColor = isDark ? lighten(color, 6) : '#f6f6f6'
  setCssVar('--top-header-text-color', textColor)
  setCssVar('--top-header-bg-hover-color', textBgHoverColor)
}
