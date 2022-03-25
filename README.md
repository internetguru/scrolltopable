
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
      text: 'Top',
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
| content | `↑` | Button content (raw HTML) |
| title | `Top` | Button title |
| id | `js-scrolltopable` | Button id and class name |
| visibleClass | `js-scrolltopable--visible` | Class for visible button |
| activeClass | `js-scrolltopable--active` | Class for active button |
| extraClass | `noprint` | List of extra classes separated by space |
| hideBeforeTop | `500` | No-show zone from the top (px) |
| showBeforeBottom | `500` | No-hide zone from the button (px) |
| showAfterUp | `200` | Show the button after scrolling up (px) |
| hideAfterDown | `200` | Hide the button after scrolling down (px) |
| activeTime | `0` | Keep `activeClass` after clicking the button (ms) |
| scrollActionDelay | `200` | Wait before evaluating scrolling (ms) |

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
