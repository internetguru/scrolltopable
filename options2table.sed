#!/bin/sed -Enf

# Print table header
1 {
  x
  z
  s,^,|Configuration name|Default value|Description|,p
  s,[^|],-,gp
  x
}
/^Config\./ {
  s,^([^ =]+) *= *([^ ']*) *// *(.*)$,| \1 | `\2` | \3 |,p
  s,^([^ =]+) *= *'([^']*)' *// *(.*)$,| \1 | `\2` | \3 |,p
}
