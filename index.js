var Config = {}
Config.text = '^' // Text or HTML to be inserted into main element
Config.title = 'Top' // Button title
Config.hideTop = 500 // Position in px from the top of the page where button will be hidden
Config.showBottom = 500 // Position in from the bottom of the page where button will be shown
Config.deltaUpShow = 200 // Scroll up delta in px which show button
Config.deltaDownHide = 200 // Scroll down delta in px which hide button
Config.activeTimeout = 0 // For how long time in ms button should have `activeClass` and be visible after click on button
Config.scrollActionTimeout = 200 // For how long should be processing scroll delayed after stop scrolling
Config.ns = 'js-scrolltopable' // Button id and prefix for classes
Config.extraClass = 'noprint' // Button extra class(es)
Config.visibleClass = `${Config.ns}--visible` // Class for visible button
Config.activeClass = `${Config.ns}--active` // Class for active button (`activeTimeout > 0`)

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
      //let button = document.getElementById(Config.ns)
      button.classList.remove(Config.visibleClass)
    },
    showButton = function () {
      displayed = true
      //let button = document.getElementById(Config.ns)
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
        if (getDocumentHeight() - scrollTop < Config.showBottom) {
          showButton()
        } else if (
          scrollTop <= Config.hideTop
          || (delta > 0 && deltaAbs > Config.deltaDownHide)
        ) {
          hideButton()
        } else if (deltaAbs > Config.deltaUpShow) {
          showButton()
        }
        lastScrollTop = scrollTop
      }, Config.scrollActionTimeout)
    },
    initPosition = function () {
      const scrollTop = getScrollTop()
      if (scrollTop <= Config.hideTop) {
        return
      }
      showButton()
      lastScrollTop = scrollTop
    },
    fireEvents = function () {
      window.addEventListener('scroll', processScroll, false)
      button.addEventListener('click', (event) => {
        window.scrollTo(0, 0)
        if (Config.activeTimeout == 0) {
          return;
        }
        button.classList.add(Config.activeClass)
        window.setTimeout(() => {
          button.classList.remove(Config.activeClass)
          hideButton()
        }, Config.activeTimeout)
      })
    },
    createButton = function () {
      button = document.createElement('a')
      button.id = Config.ns
      button.title = Config.title
      button.className = `${Config.extraClass} ${Config.ns}`
      let span = document.createElement('span')
      span.innerHTML = Config.text
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
