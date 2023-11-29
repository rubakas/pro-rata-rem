const path = require('path');
const merge = require('lodash/merge');
const cssMatcher = require('jest-matcher-css');
const postcss = require('postcss');
const tailwindcss = require('tailwindcss');
const customPlugin = require('./index.js');

expect.extend({
  toMatchCss: cssMatcher,
});

function generatePluginCss(overrides) {
  const config = {
    corePlugins: true,
    plugins: [customPlugin],
  };

  return postcss(tailwindcss(merge(config, overrides)))
    .process('html { @apply pro-rata-rem--inclusive; }', {
      from: `${path.resolve(__filename)}`,
    })
    .then(({ css }) => css);
}

test('component classes can be generated', () => {
  return generatePluginCss().then(css => {
    expect(css).toMatchCss(`    
    html { 
      font-size: 16px;
    }

    @media (min-width: 640px) {
      html {
        font-size: 16px;
      }
    }

    @media (min-width: 768px) {
      html {
        font-size: 20px;
      }
    }

    @media (min-width: 1024px) {
      html {
        font-size: 24px;
      }
    }

    @media (min-width: 1280px) {
      html {
        font-size: 24px;
      }
    }

    @media (min-width: 1536px) {
      html {
        font-size: 28px;
      }
    }
    `);
  });
});