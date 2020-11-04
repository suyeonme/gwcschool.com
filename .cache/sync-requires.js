const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/Users/suyeonkang/Desktop/coffee-wood-school/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/suyeonkang/Desktop/coffee-wood-school/src/pages/about.js"))),
  "component---src-pages-barista-js": hot(preferDefault(require("/Users/suyeonkang/Desktop/coffee-wood-school/src/pages/barista.js"))),
  "component---src-pages-contact-us-js": hot(preferDefault(require("/Users/suyeonkang/Desktop/coffee-wood-school/src/pages/contact-us.js"))),
  "component---src-pages-facilities-js": hot(preferDefault(require("/Users/suyeonkang/Desktop/coffee-wood-school/src/pages/facilities.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/suyeonkang/Desktop/coffee-wood-school/src/pages/index.js"))),
  "component---src-pages-woodcraft-js": hot(preferDefault(require("/Users/suyeonkang/Desktop/coffee-wood-school/src/pages/woodcraft.js")))
}

