module.exports = {
  plugins: [
    function () {
      return {
        visitor: {
          MetaProperty(path) {
            path.replaceWithSourceString('process');
          },
        },
      };
    },
  ],
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    [
      '@babel/preset-react',
      {
        development: true,
        useBuiltIns: true,
        runtime: 'automatic',
      },
    ],
    '@babel/preset-typescript',
  ],
};
