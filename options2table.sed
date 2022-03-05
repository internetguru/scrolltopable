#!/bin/sed -Enf

# Print table header at the beginning
1 {
  # Save pattern space (current line)
  x

  # Empty pattern space
  z

  # Put table header into pattern space and print it out
  s,^,|Configuration name|Default value|Description|,p

  # Substitute all characters except "|" with "-" and print out (header separator)
  s,[^|],-,gp

  # Restore pattern space
  x
}

# Process only lines starting with "Config."
/^Config\./ {

  # Prepare line with "config_variable", "default_value", "description"

  # :numeric value
  s,^([^ =]+) *= *([^ ']*) *// *(.*)$,| \1 | `\2` | \3 |,

  # :string value
  s,^([^ =]+) *= *'([^']*)' *// *(.*)$,| \1 | `\2` | \3 |,

  # Escape closing and opening "`" in code (expects no spaces inside ``)
  # Set label "a"
  :a
  # Escape ` in code (single part)
  s,``([^ `]+)``,`` `\1` ``,
  # When substitution was made, goto "a" (try again)
  ta

  # Print out table
  p
}
