import buildCssLoader from '../webpack/loaders/buildCssLoader';
import { BuildPaths } from '../webpack/types/config';
import path from 'path';
import webpack from 'webpack';

export default ({config}: {config: webpack.Configuration}) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src')
    }
    config.resolve?.extensions?.push('.ts', '.tsx')
    config.resolve?.modules?.push(paths.src)
    config.module?.rules?.push(buildCssLoader(true));
    return config
}