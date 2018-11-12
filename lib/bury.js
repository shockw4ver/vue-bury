import warn from './warn'

const bury = {
  install (Vue, options) {

    // Use adaptors to define specific bury functions.
    const funcs = options.adapters

    Vue.directive('bury', {
      bind (el) {
        // Store func will be bound to element, for easily unbind.
        el.buriedFuncs = []
      },
  
      // Define some rule, simple so not DRY, there are extensions TODO.
      inserted (el, binding) {
        // Now support three simple interact.
        const { load, click, hover } = binding.modifiers
        const value = binding.value
        const data = el.dataset

        if (load) {
          if (!funcs.load) {
            warn('load')
          }

          funcs.load(data, value)
        }

        if (hover) {
          if (!funcs.hover) {
            warn('hover')
          }

          funcs.wrappedHover = ($event) => {
            funcs.hover(data, value, $event)
          }

          el.addEventListener('mouseover', funcs.wrappedHover)
          el.buriedFuncs.push({
            eventName: 'mouseover',
            handler: funcs.wrappedHover
          })
        }

        if (click) {
          if (!funcs.click) {
            warn('click')
          }

          funcs.wrappedClick = ($event) => {
            funcs.click(data, value, $event)
          }

          el.addEventListener('click', funcs.wrappedClick)
          el.buriedFuncs.push({
            eventName: 'click',
            handler: funcs.wrappedClick
          })
        }
      },

      // unbind all listeners
      unbind (el) {
        el.buriedFuncs.forEach(item => {
          el.removeEventListener(item.eventName, item.handler)
        })
      }
    })
  }
}

export default bury;