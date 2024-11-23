module.exports = {
	trailingComma: "es5",
	tabWidth: 2,
	semi: true,
	singleQuote: false,
	printWidth: 120,
	tailwindConfig: "./tailwind.config.ts",
	tailwindFunctions: ["clsx"],
  plugins: [require('prettier-plugin-tailwindcss')],
}
