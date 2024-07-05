@(
    'prettier'
    'prettier-plugin-astro'
    'prettier-plugin-style-order'
    '@trivago/prettier-plugin-sort-imports'
    'prettier-plugin-organize-attributes'
    'prettier-plugin-tailwindcss'

) | ForEach-Object { npm i -D $_ }

@(
    'react'
    'tailwind'

) | ForEach-Object { npx astro add $_ }

npm i daisyui



<# upgrade
npx @astrojs/upgrade
npm i @astrojs/<package>@latest
#>

<# uninstall
npm uninstall @astrojs/<package>
#>
