
var Config = {}
Config.ns = 'js-scrolltopable' // wrapper element (a) id value
Config.text = '^' // text content
Config.title = 'Top' // text content
Config.hidePosition = 500 // display / hide button int px from top
Config.scrollhideClass = `${Config.ns}-scrollhide`
Config.noprintClass = 'noprint'
Config.visibleClass = `${Config.ns}--visible`
Config.activeClass = `${Config.ns}--active`
Config.activeTimeout = 0 // ms
Config.actionTimeout = 200 // ms
Config.animationSpeed = 250 // ms
Config.deltaYshow = 200
Config.deltaYhide = 200
Config.deltaYbottom = 500

var Scrolltopable = function () {

  var
    windowScrollTimeOut = null,
    button = null,
    displayed = false,
    lastScrollTop = 0,
    getScrollTop = function () {
      return document.body.scrollTop || document.documentElement.scrollTop
    },
    getHeight = function () {
      var body = document.body,
        html = document.documentElement
      return Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight) - Math.max(html.clientHeight, window.innerHeight || 0)
    },
    hideButton = function () {
      displayed = false
      var button = document.getElementById(Config.ns)
      button.classList.remove(Config.visibleClass)
    },
    showButton = function () {
      displayed = true
      var button = document.getElementById(Config.ns)
      button.classList.add(Config.visibleClass)
    },
    processScroll = function () {
      window.clearTimeout(windowScrollTimeOut)
      windowScrollTimeOut = window.setTimeout(function () {
        if (button.classList.contains(Config.activeClass)) {
          return;
        }
        var scrollTop = getScrollTop()
        var delta = scrollTop - lastScrollTop
        var deltaAbs = Math.abs(delta)
        if (getHeight() - scrollTop < Config.deltaYbottom) {
          showButton()
        } else if (
          scrollTop < Config.hidePosition
          || (delta > 0 && deltaAbs > Config.deltaYhide)
        ) {
          hideButton()
        } else if (deltaAbs > Config.deltaYshow) {
          showButton()
        }
        lastScrollTop = scrollTop
      }, Config.actionTimeout)
    },
    init = function () {
      var scrollTop = getScrollTop()
      if (scrollTop < Config.hidePosition) {
        return
      }
      showButton()
      lastScrollTop = scrollTop
    },
    setScrollEvent = function () {
      window.addEventListener('scroll', processScroll, false)
    },
    createButton = function () {
      button = document.createElement("a")
      button.id = Config.ns
      button.title = Config.title
      button.className = Config.noprintClass + " " + Config.ns
      var span = document.createElement("span")
      span.innerHTML = Config.text
      button.appendChild(span)
      document.body.appendChild(button)
    }

  return {
    /**
    * @param  {Object} cfg custom configuration
    */
    init: function (cfg) {
      Config = {...Config, ...cfg} // merge configuration
      createButton()
      button.addEventListener("click", (event) => {
        window.scrollTo(0, 0)
        if (Config.activeTimeout == 0) {
          return;
        }
        button.classList.add(Config.activeClass)
        window.setTimeout(() => {
          button.classList.remove(Config.visibleClass)
          button.classList.remove(Config.activeClass)
        }, Config.activeTimeout)
      })
      setScrollEvent()
      init()
    }
  }
}

let instance = new Scrolltopable()
export { instance as Scrolltopable }