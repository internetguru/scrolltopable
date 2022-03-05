#!/bin/bash

infile='README.md'
outfile='index.html'

# github markdown css from:
# https://github.com/sindresorhus/github-markdown-css/blob/main/github-markdown.css

fix_cols() {
  sed -E '
    \_<colgroup>_,\_</colgroup>_ {
      \_</?colgroup>_p
      \_<colgroup>_a \
<col style="width: 20%" />\
<col style="width: 30%" />\
<col style="width: 50%" />
      d
    }
  '
}

import_licence() {
  sed -E '
    /^ *## License/ {
      a
      r LICENSE
      q
    }
  '
}

html() {
  cat <<HTML
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Scrolltopable</title>
  <script type="module" src="index.min.js"></script>
  <link rel="stylesheet" type="text/css" href="basic.css"/>
  <link rel="stylesheet" href="github-markdown.css"/>
  <style>
  .markdown-body {
    box-sizing: border-box;
    min-width: 200px;
    max-width: 980px;
    margin: 0 auto;
    padding: 45px;
  }
  @media (max-width: 767px) {
    .markdown-body {
      padding: 15px;
    }
  }
  </style>
  <script type="module">
    import { Scrolltopable } from './index.min.js'
    Scrolltopable.init({})
  </script>
</head>
<body class="markdown-body">
HTML
  cat -
  cat <<HTML
</body>
</html>
HTML
}


import_licence < "${infile}" \
| pandoc -t html -f markdown \
| html \
| fix_cols \
> "${outfile}"
