import {BuildOptions} from "./types/config";
import webpack from "webpack";
import path from "path";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildReslovers} from "./buildReslovers";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions) : webpack.Configuration {
    const {paths, mode, isDev} = options;
    return {
        mode: mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true
        },
        devtool: isDev ?  'inline-source-map'  : undefined,
        plugins: buildPlugins(options),
        module: {
            rules:  buildLoaders(options)
        },
        resolve: buildReslovers(options),
        devServer: isDev ? buildDevServer(options) : undefined,

    }
}