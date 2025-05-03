module github.com/HugoBlox/hugo-blox-builder/test

go 1.15

require (
	github.com/HugoBlox/hugo-blox-builder/modules/blox-analytics v0.1.3 // indirect
	github.com/HugoBlox/hugo-blox-builder/modules/blox-tailwind v0.3.3-0.20250301201144-44e75541f7be
)

replace github.com/HugoBlox/hugo-blox-builder/modules/blox-tailwind => ../modules/blox-tailwind
