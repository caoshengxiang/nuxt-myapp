module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'plugin:vue/recommended',
    'plugin:prettier/recommended'
  ],
  // required to lint *.vue files
  plugins: [
    'vue',
    'prettier'
  ],
  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // allow async-await
    'generator-star-spacing': 'off',

    "comma-dangle": 0, // [2, "never"],//对象字面量项尾不能有逗号
    "indent": 0, //[2, 4],//缩进风格
    "no-undef": 0, // 未定义，jqeuery,axios全局配置
  }
}
