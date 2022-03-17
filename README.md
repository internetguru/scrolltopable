
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/internetguru/scrolltopable/Build)
![GitHub](https://img.shields.io/github/license/internetguru/scrolltopable)
[![npm](https://img.shields.io/npm/v/@internetguru/scrolltopable)](https://www.npmjs.com/package/@internetguru/scrolltopable)
![GitHub file size in bytes](https://img.shields.io/github/size/internetguru/scrolltopable/index.min.js?label=minified%20size)

# Scrolltopable

> Scrolltopable is a JavaScript module that provides **ultimate scroll-to-top** functionality. **No dependencies and frameworks**, pure JavaScript!

See our [demo](https://internetguru.github.io/scrolltopable/).

## Simple Usage

```html
<head>
  <!-- include basic css -->
  <link rel="stylesheet" type="text/css" href="https://unpkg.com/@internetguru/scrolltopable@latest/basic.css"/>
  <!-- include scrolltopable -->
  <script type="module" src="https://unpkg.com/@internetguru/scrolltopable@latest/index.min.js"></script>
  <!-- initialization with modifying default options -->
  <script type="module">
    import { Scrolltopable } from './index.min.js'
    Scrolltopable.init({
      text: '↑',
      hideTop: 0,
    })
  </script>
</head>
```

Note: you can install package locally by running `npm i @internetguru/scrolltopable --save`.

## Advanced Example

Launch a rocket after clicking a button! [See it in production](https://www.webtesting.cz/).

```html
<head>
  <!-- include basic css -->
  <link rel="stylesheet" type="text/css" href="https://unpkg.com/@internetguru/scrolltopable@latest/basic.css"/>
  <!-- include fontawesome -->
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/js/all.min.js"></script>
  <!-- include scrolltopable -->
  <script type="module" src="index.js"></script>
  <!-- initialization with modifying default options -->
  <script type="module">
    import { Scrolltopable } from './index.js'
    Scrolltopable.init({
      text: "<span class='fa fa-fw fa-space-shuttle fa-rotate-270'></span>",
      activeTimeout: 1500
    })
  </script>
  <!-- launch animation and rocket icon styles -->
  <style type="text/css">
    html {
      scroll-behavior: smooth;
    }
    #js-scrolltopable {
      background: none;
    }
    #js-scrolltopable svg {
      position: relative;
      left: 0;
      top: -0.25em;
      font-size: 0.65em;
      color: black;
    }
    #js-scrolltopable.js-scrolltopable--active {
      animation-name: launch;
      animation-duration: 1s;
      animation-timing-function: ease-in;
      animation-fill-mode: forwards;
      opacity: 1;
    }
    @keyframes launch {
      90% {bottom: 100vh; opacity: 1;}
      100% {bottom: 100vh; opacity: 0;}
    }
  </style>
</head>
```

## Options

|Configuration name|Default value|Description|
|------------------|-------------|-----------|
| text | `^` | Text or HTML to be inserted into main element |
| title | `Top` | Button title |
| hideTop | `500` | Position in px from the top of the page where button will be hidden |
| showBottom | `500` | Position in from the bottom of the page where button will be shown |
| deltaUpShow | `200` | Scroll up delta in px which show button |
| deltaDownHide | `200` | Scroll down delta in px which hide button |
| activeTimeout | `0` | For how long time in ms button should have `activeClass` and be visible after click on button |
| scrollActionTimeout | `200` | For how long should be processing scroll delayed after stop scrolling |
| ns | `js-scrolltopable` | Button id and prefix for classes |
| extraClass | `noprint` | Button extra class(es) |
| visibleClass | `` `${Config.ns}--visible` `` | Class for visible button |
| activeClass | `` `${Config.ns}--active` `` | Class for active button (`activeTimeout > 0`) |

## Maintainers

-  Paulo Petrzela paulo@internetguru.io
-  George Pavelka george@internetguru.io

## Contributing

Pull requests are welcome, don't hesitate to contribute.

## Donation

If you find this program useful, please **send a donation** to its developers to support their work. If you use this program at your workplace, please suggest that the company make a donation. We appreciate contributions of any size. Donations enable us to spend more time working on this package, and help cover our infrastructure expenses.

If you’d like to make a donation of any value, please send it to the following PayPal address:

[PayPal Donation](https://www.paypal.com/donate/?hosted_button_id=FVH97VVYW8NM6)

Since we aren’t a tax-exempt organization, we can’t offer you a tax deduction. But for all donations over 50 USD, we’d be happy to recognize your contribution on this README file for the next release.

We are also happy to consider making particular improvements or changes, or giving specific technical assistance, in return for a substantial donation over 100 USD. If you would like to discuss this possibility, write us at info@internetguru.io.

Another possibility is to pay a software maintenance fee. Again, write us about this at info@internetguru.io to discuss how much you want to pay and how much maintenance we can offer in return.

Thanks for your support!

## License

[MIT License](LICENSE)
