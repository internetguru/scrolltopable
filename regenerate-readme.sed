#!/bin/sed -Ef
# Usage:  ./regenerate-readme.sed -i README.md

# Change Options section (from heading "Options" to the next heading)
/^## *Options/,/^## / {

	# Print heading (starting and closing)
	/^## */ p

	# Generate content after "Options" heading
	/^## *Options/ {

		# Insert empty line before table
		i

		# Execute command and print its output (generate table with options)
		e ./options2table.sed index.js

		# Append empty line after table
		a
	}

	# Delete old content of "Options" section
	d
}
