import { RuleSetRule } from 'webpack'

export const Rules = (): RuleSetRule[] => {
    const tsRule =  {
        test: /\.([cm]?ts|tsx)$/,
        use: [
          {
            loader: 'ts-loader',
          }
        ]
      }
      const styleRule =  {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ]
      }
  return [
    tsRule,
    styleRule
  ]
}