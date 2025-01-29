var Config = {}
Config.content = '↑' // Button content (raw HTML)
Config.title = 'Top' // Button title
Config.id = 'js-scrolltopable' // Button id and class name
Config.visibleClass = 'js-scrolltopable--visible' // Class for visible button
Config.activeClass = 'js-scrolltopable--active' // Class for active button
Config.extraClass = 'noprint' // List of extra classes separated by space
Config.hideBeforeTop = 500 // No-show zone from the top (px)
Config.showBeforeBottom = 500 // No-hide zone from the button (px)
Config.showAfterUp = 200 // Show the button after scrolling up (px)
Config.hideAfterDown = 200 // Hide the button after scrolling down (px)
Config.activeTime = 0 // Keep `activeClass` after clicking the button (ms)
Config.scrollActionDelay = 200 // Wait before evaluating scrolling (ms)

let Scrolltopable = function () {

  let
    windowScrollTimeOut = null,
    button = null,
    displayed = false,
    lastScrollTop = 0,
    initCss = function (styles) {
      const style = document.createElement('style')
      style.innerHTML = Config.styles
      document.head.appendChild(style)
    },
    getScrollTop = function () {
      return document.body.scrollTop
        || document.documentElement.scrollTop
    },
    getDocumentHeight = function () {
      const body = document.body
      const html = document.documentElement
      return Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight)
        - Math.max(html.clientHeight, window.innerHeight || 0)
    },
    hideButton = function () {
      displayed = false
      button.classList.remove(Config.visibleClass)
    },
    showButton = function () {
      displayed = true
      button.classList.add(Config.visibleClass)
    },
    processScroll = function () {
      window.clearTimeout(windowScrollTimeOut)
      windowScrollTimeOut = window.setTimeout(function () {
        if (button.classList.contains(Config.activeClass)) {
          return;
        }
        const scrollTop = getScrollTop()
        const delta = scrollTop - lastScrollTop
        const deltaAbs = Math.abs(delta)
        if (getDocumentHeight() - scrollTop < Config.showBeforeBottom) {
          showButton()
        } else if (
          scrollTop <= Config.hideBeforeTop
          || (delta > 0 && deltaAbs > Config.hideAfterDown)
        ) {
          hideButton()
        } else if (deltaAbs > Config.showAfterUp) {
          showButton()
        }
        lastScrollTop = scrollTop
      }, Config.scrollActionDelay)
    },
    initPosition = function () {
      const scrollTop = getScrollTop()
      if (scrollTop <= Config.hideBeforeTop) {
        return
      }
      showButton()
      lastScrollTop = scrollTop
    },
    fireEvents = function () {
      window.addEventListener('scroll', processScroll, false)
      button.addEventListener('click', (event) => {
        window.scrollTo(0, 0)
        if (Config.activeTime == 0) {
          return;
        }
        button.classList.add(Config.activeClass)
        window.setTimeout(() => {
          button.classList.remove(Config.activeClass)
          hideButton()
        }, Config.activeTime)
      })
    },
    createButton = function () {
      button = document.createElement('a')
      button.id = Config.id
      button.title = Config.title
      button.className = `${Config.extraClass} ${Config.id}`
      let span = document.createElement('span')
      span.innerHTML = Config.content
      button.appendChild(span)
      document.body.appendChild(button)
    }

  return {
    init: function (cfg) {
      Config = {...Config, ...cfg}
      createButton()
      initCss(Config.styles)
      fireEvents()
      initPosition()
    }
  }
}

let instance = new Scrolltopable()
export { instance as Scrolltopable }
