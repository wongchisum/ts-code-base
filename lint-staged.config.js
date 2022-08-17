module.exports = {
  '*': ['echo'],
  '*.{js,jsx,ts,tsx}': ['pnpm lint:es', 'pnpm lint:code', 'git add'],
}
