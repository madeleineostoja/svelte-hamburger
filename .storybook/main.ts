const prod = process.env.NODE_ENV === 'production';
const CONFIG = {
  stories: ['../*.stories.@(ts|mdx)'],
  webpack: {
    rules: [
      {
        removeMatch: '.svelte',
        test: /\.svelte$/,
        use: [
          {
            loader: 'svelte-loader',
            options: {
              dev: !prod,
              emitCss: true,
              preprocess: require('svelte-preprocess')()
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      }
    ]
  }
};

module.exports = {
  stories: CONFIG.stories,
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async (config) => {
    const findRule = (ext) => {
      return config.module.rules.find((rule) => {
        return rule.test.toString().includes(ext.replace('.', ''));
      });
    };

    let rule = config.module.rules.find(
      (r) =>
        r.test &&
        r.test.toString().includes('svg') &&
        r.loader &&
        r.loader.includes('file-loader')
    );
    rule.test = /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/;

    // Add new rules
    CONFIG.webpack.rules.forEach((rule) => {
      if (rule.removeMatch) {
        findRule(rule.removeMatch).exclude = rule.test;
        delete rule.removeMatch;
      }
      config.module.rules.push(rule);
    });

    return config;
  }
};
