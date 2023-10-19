import { isDarkColor, lighten, hexToRGB } from '@/utils/color'
import { useCssVar } from '@vueuse/core'
import { unref } from 'vue'
// 在根元素设置css变量
export const setCssVar = (prop, val, dom = document.documentElement) => {
  dom.style.setProperty(prop, val)
}
// 根据系统色变化 设置其他用到系统色的地方
export const setSysOtherColorBySysThemeColor = (color) => {
  setCssVar('--el-color-primary', color)
  // 看菜单是否是深色的
  const menuThemeColor = useCssVar('--left-menu-bg-color', document.documentElement)
  const isDark = isDarkColor(unref(menuThemeColor))
  const itemActiveBgColor = isDark ? color : hexToRGB(color, 0.1)
  setCssVar('--left-menu-item-active-bg-color', itemActiveBgColor)
}
// 根据头部主题色 设置头部文字颜色等
export const setTopTextColorByTopThemeColor = (color) => {
  setCssVar('--top-header-bg-color', color)
  const isDark = isDarkColor(color)
  const textColor = isDark ? '#fff' : '#000'
  const textBgHoverColor = isDark ? lighten(color, 6) : '#f6f6f6'
  setCssVar('--top-header-text-color', textColor)
  setCssVar('--top-header-bg-hover-color', textBgHoverColor)
}
// 根据菜单主题色 设置菜单文字颜色等
export const setMenuTextColorByMenuThemeColor = (color) => {
  setCssVar('--left-menu-bg-color', color)
  // 获取主题颜色
  const primaryColor = useCssVar('--el-color-primary', document.documentElement)

  const isDark = isDarkColor(color)
  const itemBgColor = isDark ? lighten(color, 6) : 'fff'
  const itemActiveBgColor = isDark ? 'var(--el-color-primary)' : hexToRGB(unref(primaryColor), 0.1)
  const textColor = isDark ? '#b7bdc3' : '#333'
  const textActiveColor = isDark ? '#fff' : '#000'
  setCssVar('--left-menu-text-color', textColor)
  setCssVar('--left-menu-text-active-color', textActiveColor)
  setCssVar('--left-menu-item-bg-color', itemBgColor)
  setCssVar('--left-menu-item-active-bg-color', itemActiveBgColor)
}
