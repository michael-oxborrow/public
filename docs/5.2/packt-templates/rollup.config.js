'use strict'

const path = require('path')
const { babel } = require('@rollup/plugin-babel')
const { nodeResolve } = require('@rollup/plugin-node-resolve')
const { terser } = require('rollup-plugin-terser')

export default [
  {
    input: path.resolve(__dirname, `comp-tia-security/comp-tia-security.js`),
    output: {
      file: path.resolve(__dirname, `comp-tia-security/comp-tia-security.min.js`),
      format: 'cjs',
      generatedCode: 'es2015'
    },
    plugins: [nodeResolve(), babel({ babelHelpers: 'bundled' }), terser()]
  },
  {
    input: path.resolve(__dirname, `in-development/in-development.js`),
    output: {
      file: path.resolve(__dirname, `in-development/in-development.min.js`),
      format: 'cjs',
      generatedCode: 'es2015'
    },
    plugins: [nodeResolve(), babel({ babelHelpers: 'bundled' }), terser()]
  },
  {
    input: path.resolve(__dirname, `published/published.js`),
    output: {
      file: path.resolve(__dirname, `published/published.min.js`),
      format: 'cjs',
      generatedCode: 'es2015'
    },
    plugins: [nodeResolve(), babel({ babelHelpers: 'bundled' }), terser()]
  }
]