module.exports = {
  "**/*.ts?(x)": () => "tsc -p tsconfig.json --noEmit",
  "**/*.(ts|tsx)": (filenames) => [`yarn eslint ${filenames.join(" ")}`],
}
