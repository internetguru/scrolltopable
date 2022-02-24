
[![npm](https://img.shields.io/npm/v/@internetguru/scrolltopable)](https://www.npmjs.com/package/@internetguru/scrolltopable)
![GitHub file size in bytes](https://img.shields.io/github/size/internetguru/scrolltopable/index.min.js?label=minified%20size)
![GitHub](https://img.shields.io/github/license/internetguru/scrolltopable)

# Scrolltopable

> Scrolltopable is a JavaScript module that provides **ultimate scroll-to-top** functionality. **No dependencies and frameworks**, pure JavaScript!

See our [demo](https://internetguru.github.io/scrolltopable/).

## Installation

- Using npm

  ```sh
  npm i @internetguru/scrolltopable --save
  ```

- Directly using [unpkg](https://unpkg.com/)

  ```html
  <!-- source -->
  <script type="module" src="https://unpkg.com/@internetguru/scrolltopable"></script>
  <!-- minified -->
  <script type="module" src="https://unpkg.com/@internetguru/scrolltopable@latest/index.min.js"></script>
  ```

## Usage

```js
import { Scrolltopable } from '@internetguru/scrolltopable'
Scrolltopable.init({
  // options
})
```

## Options

|Configuration name|Default value|Description|
|------------------|-------------|-----------|
|Config.text | `^` | TODO |
|Config.title | `Top` | TODO |
|Config.hidePosition | `500` | TODO |
|Config.activeTimeout | `0` | TODO |
|Config.actionTimeout | `200` | TODO |
|Config.deltaYshow | `200` | TODO |
|Config.deltaYhide | `200` | TODO |
|Config.deltaYbottom | `500` | TODO |
|Config.ns | `js-scrolltopable` | TODO |
|Config.scrollhideClass | `${Config.ns}-scrollhide` | TODO |
|Config.visibleClass | `${Config.ns}--visible` | TODO |
|Config.activeClass | `${Config.ns}--active` | TODO |
|Config.noprintClass | `noprint` | TODO |
|Config.styles | [See implementation](index.js) | TODO |

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
