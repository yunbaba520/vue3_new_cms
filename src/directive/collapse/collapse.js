// 折叠指令，参考，适用于大屏左中右布局，实际是操作类名
// 需要设置定位，宽高
import flag_img from '../../assets/image/collapseFlag.png'

export default {
  mounted(el, binding) {
    const { value } = binding
    const parent = el
    console.dir(el)
    parent.classList.add('collapse_show_' + value)
    parent.classList.add('my_collapse')

    let children = Array.from(el.children)
    const collapse_box = document.createElement('div')
    collapse_box.className = 'collapse_box collapse_box_' + value
    children.map((item) => {
      collapse_box.appendChild(item)
    })
    parent.appendChild(collapse_box)
    // 按钮
    const collapse_flag = document.createElement('div')
    collapse_flag.className = 'collapse_flag collapse_flag_' + value
    const collapse_flag_img = document.createElement('img')
    collapse_flag_img.src = flag_img
    collapse_flag.appendChild(collapse_flag_img)
    parent.appendChild(collapse_flag)

    collapse_flag.onclick = () => {
      let className = parent.className
      let classList = parent.classList
      let collapse_show_left = 'collapse_show_left'
      let collapse_show_right = 'collapse_show_right'
      let collapse_show_top = 'collapse_show_top'
      let collapse_show_bottom = 'collapse_show_bottom'
      let collapse_hide_left = 'collapse_hide_left'
      let collapse_hide_right = 'collapse_hide_right'
      let collapse_hide_top = 'collapse_hide_top'
      let collapse_hide_bottom = 'collapse_hide_bottom'
      switch (true) {
        case className.indexOf(collapse_show_left) != -1:
          classList.remove(collapse_show_left)
          classList.add(collapse_hide_left)
          break
        case className.indexOf(collapse_show_right) != -1:
          classList.remove(collapse_show_right)
          classList.add(collapse_hide_right)
          break
        case className.indexOf(collapse_show_top) != -1:
          classList.remove(collapse_show_top)
          classList.add(collapse_hide_top)
          break
        case className.indexOf(collapse_show_bottom) != -1:
          classList.remove(collapse_show_bottom)
          classList.add(collapse_hide_bottom)
          break
        case className.indexOf(collapse_hide_left) != -1:
          classList.remove(collapse_hide_left)
          classList.add(collapse_show_left)
          break
        case className.indexOf(collapse_hide_right) != -1:
          classList.remove(collapse_hide_right)
          classList.add(collapse_show_right)
          break
        case className.indexOf(collapse_hide_top) != -1:
          classList.remove(collapse_hide_top)
          classList.add(collapse_show_top)
          break
        case className.indexOf(collapse_hide_bottom) != -1:
          classList.remove(collapse_hide_bottom)
          classList.add(collapse_show_bottom)
          break
        default:
          break
      }
    }
  },
  closeCollapse() {
    let dom = Array.from(document.getElementsByClassName('my_collapse'))
    dom.map((item) => {
      let className = item.className
      let classList = item.classList
      let left = 'collapse_show_left'
      let right = 'collapse_show_right'
      let top = 'collapse_show_top'
      let bottom = 'collapse_show_bottom'
      switch (true) {
        case className.indexOf(left) != -1:
          classList.remove('collapse_show_left')
          classList.add('collapse_hide_left')
          break
        case className.indexOf(right) != -1:
          classList.remove('collapse_show_right')
          classList.add('collapse_hide_right')
          break
        case className.indexOf(top) != -1:
          classList.remove('collapse_show_top')
          classList.add('collapse_hide_top')
          break
        case className.indexOf(bottom) != -1:
          classList.remove('collapse_show_bottom')
          classList.add('collapse_hide_bottom')
          break
        default:
          break
      }
    })
  },
  openCollapse() {
    let dom = Array.from(document.getElementsByClassName('my_collapse'))
    dom.map((item) => {
      let className = item.className
      let classList = item.classList
      let left = 'collapse_hide_left'
      let right = 'collapse_hide_right'
      let top = 'collapse_hide_top'
      let bottom = 'collapse_hide_bottom'
      switch (true) {
        case className.indexOf(left) != -1:
          classList.remove('collapse_hide_left')
          classList.add('collapse_show_left')
          break
        case className.indexOf(right) != -1:
          classList.remove('collapse_hide_right')
          classList.add('collapse_show_right')
          break
        case className.indexOf(top) != -1:
          classList.remove('collapse_hide_top')
          classList.add('collapse_show_top')
          break
        case className.indexOf(bottom) != -1:
          classList.remove('collapse_hide_bottom')
          classList.add('collapse_show_bottom')
          break
        default:
          break
      }
    })
  }
}
