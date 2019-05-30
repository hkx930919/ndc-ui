/* eslint-disable */
// This file is auto gererated by build/build-entry.js
    import Button from './button'
import Icon from './icon'
    const version = '0.1.7'
    const components = [
      Button,
  Icon
    ]
    const install = Vue => {
      components.forEach(Component => {
        Vue.use(Component)
      })
    };
    /* istanbul ignore if */
    if (typeof window !== 'undefined' && window.Vue) {
      install(window.Vue)
    }
    export {
      install,
      version,
      Button,
  Icon
    }
    export default {
      install,
      version
    }
  