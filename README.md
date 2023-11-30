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
  },
  plugins: [
    // ...
    require('pro-rata-rem'),
    // ...
  ],
};
```

This plugin will generate following CSS classes, apply one to your root element (html):

```css
/* Responsive Root element proportional to 6px */
.pro-rata-rem--kids
{
  ...
}

/* Responsive Root element proportional to 4px */
.pro-rata-rem--inclusive {
  ...
}

/* Responsive Root element proportional to 3px */
.pro-rata-rem--critical {
  ...
}
```

## License

pro-rata-rem is licensed under the MIT License.

## Credits

Created with [create-tailwind-plugin](https://github.com/Landish/create-tailwind-plugin).
