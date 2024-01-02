const plugin = require('tailwindcss/plugin')

const proRataRem = plugin(
  function({ 
    addUtilities, 
    addComponents, 
    addBase, 
    addVariant, 
    e, 
    prefix,
    theme,
    variants, 
    config,
    postcss 
  }) {
    
  const presetsCritical = {
    'default': '12px',
    'xs': '12px',
    'sm': '12px',
    'tablet': '15px',
    'md': '15px',
    'laptop': '18px',
    'lg': '18px',
    'xl': '18px',
    'desktop': '21px',
    '2xl': '21px',
    'desktop-4k': '24px',
    '3xl': '24px'
  }

  const presetsInclusive = {
    'default': '16px',
    'xs': '16px',
    'sm': '16px',
    'tablet': '20px',
    'md': '20px',
    'laptop': '24px',
    'lg': '24px',
    'xl': '24px',
    'desktop': '24px',
    '2xl': '28px',
    'desktop-4k': '24px',
    '3xl': '32px'
  }

  const presetsKids = {
    'default': '24px',
    'xs': '24px',
    'sm': '24px',
    'tablet': '30px',
    'md': '30px',
    'laptop': '36px',
    'lg': '36px',
    'xl': '36px',
    'desktop': '42px',
    '2xl': '42px',
    'desktop-4k': '42px',
    '3xl': '48px'
  }

  function generateFontSizes(settings) {
    let screensFontSizes = {}; 
    
    Object
    .keys(theme("screens"))
    .forEach(function(key, index) {
      screensFontSizes[`@screen ${key}`] = {
        "font-size": settings[key]
      }
    }); 

    return screensFontSizes;
  }

  let settings = presetsInclusive;

  const newComponent = {
    '.pro-rata-rem--critical': {
      'font-size': presetsCritical['default'],

      ...generateFontSizes(presetsInclusive)
    },

    '.pro-rata-rem--inclusive': {
      'font-size': presetsInclusive['default'],

      ...generateFontSizes(presetsInclusive)
    },

    '.pro-rata-rem--kids': {
      'font-size': presetsKids['default'],

      ...generateFontSizes(presetsKids)
    },
  };

  addComponents(newComponent);
});

module.exports = proRataRem