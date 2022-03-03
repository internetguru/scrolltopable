#!/bin/sed -Ef

/^## *Options/,/^## / {
  /^## */ p
  /^## *Options/ {
    i
    e ./options2table.sed index.js
    a
  }
  d
}
