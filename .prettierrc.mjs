/** @type {import("prettier").Config} */
export default {
  experimentalTernaries: true,
  proseWrap: 'always',
  jsxSingleQuote: true,
  singleQuote: true,
  plugins: [
    'prettier-plugin-style-order',
    '@trivago/prettier-plugin-sort-imports',
    'prettier-plugin-organize-attributes',
    'prettier-plugin-tailwindcss', // ! ALWAYS LAST
  ],
  attributeGroups: [
    '$KEY',
    '$REF',
    '$FOR',
    '$ANGULAR_STRUCTURAL_DIRECTIVE',
    '$ANGULAR_ELEMENT_REF',
    '$ID',
    '$DEFAULT',
    'role',
    '^data-',
    '^aria-',
    '$ANGULAR_ANIMATION',
    '$ANGULAR_ANIMATION_INPUT',
    '$ANGULAR_INPUT',
    '^is[A-Z]',
    '^on[A-Z]',
    '$ANGULAR_TWO_WAY_BINDING',
    '$ANGULAR_OUTPUT',
    'style',
    'className',
  ],
  cssDeclarationSorterOrder: 'smacss',
  importOrder: ['^react', '^@?\\w', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  tailwindConfig: './tailwind.config.js',
  tailwindAttributes: ['variants'],
  tailwindFunctions: ['twMerge', 'clsx', 'cn'],
  tailwindPreserveDuplicates: false,
};
