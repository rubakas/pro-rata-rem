# pro-rata-rem

> Responsive Root Element for TailwindCSS

Install the plugin from npm:

```
$ npm install pro-rata-rem
```

Then add the plugin to your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  theme: {
    // ...
    // Optional. Your plugin might not have any options at all.
    proRataRem: {
      // ...
      YOUR_PLUGIN_CUSTOM_OPTION: true,
      // ...
    },
  },
  variants: {
    // ...
    // Optional. Your plugin might not have any variants at all.
    proRataRem: ['responsive'],
    // ...
  },
  plugins: [
    // ...
    require('pro-rata-rem'),
    // ...
  ],
};
```

This plugin will generate following CSS:

```css
/* Responsive Root element proportional to 6px */
.pro-rata-rem--kids
{
  ...
}

/* Responsive Root element proportional to 4px */
.pro-rata-rem--inclusive {
  background-color: red;
}

/* Responsive Root element proportional to 3px */
.pro-rata-rem--critical {
  display: block;
}
```

## License

pro-rata-rem is licensed under the MIT License.

## Credits

Created with [create-tailwind-plugin](https://github.com/Landish/create-tailwind-plugin).
