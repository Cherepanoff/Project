import { type RuleSetRule } from 'webpack'
import buildCssLoader from '../webpack/loaders/buildCssLoader'
import { type BuildPaths } from '../webpack/types/config'
import path from 'path'
import type webpack from 'webpack'

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src')
  }
  config.resolve?.extensions?.push('.ts', '.tsx')
  config.resolve?.modules?.push(paths.src)
  config.module?.rules?.push(buildCssLoader(true))
  config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
    // eslint-disable-next-line @typescript-eslint/prefer-includes
    if (/svg/.test(rule.test as string)) {
      return {
        ...rule,
        exclude: /\.svg$/i
      }
    }
    return rule
  })
  config.module.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack']
  })
  return config
}
