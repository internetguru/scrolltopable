var Config = {}
Config.ns = 'js-scrolltopable' // wrapper element (a) id value
Config.text = '^' // text content
Config.title = 'Top' // text content
Config.hideTop = 500 // display / hide button int px from top
Config.extraClass = 'noprint'
Config.visibleClass = `${Config.ns}--visible`
Config.activeClass = `${Config.ns}--active`
Config.activeTimeout = 0 // ms
Config.scrollActionTimeout = 200 // ms
Config.deltaUpShow = 200
Config.deltaDownHide = 200
Config.showBottom = 500
Config.styles = `
  .${Config.ns} {
    display: none;
    position: fixed;
    bottom: 0;
    right: 0;
    background: rgba(0,0,0,0.5);
    color: white;
    width: 3rem;
    height: 3rem;
    margin: 0.5em;
    border-radius: 0.25em;
    cursor: pointer;
  }
  .${Config.visibleClass} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .${Config.ns} > span {
    font-family: Arial, sans-serif;
    font-size: 3em;
    position: relative;
    top: 0.15em;
  }
}
`

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
          scrollTop < Config.hideTop
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
      if (scrollTop < Config.hideTop) {
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
          button.classList.remove(Config.visibleClass)
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
