const HtmlWebpackPlugin = require('html-webpack-plugin')
// const WebpackPwaManifestPlugin = require('webpack-pwa-manifest')
// const path = require('path')
// const WorkboxWebpackPlugin = require('workbox-webpack-plugin')

module.exports = {
  output: {
    filename: 'app.bundle.js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        template: 'src/index.html'
      }
    )
    // new WebpackPwaManifestPlugin({
    //   filename: 'manifest.webmanifest',
    //   name: 'Data mundo, consulta la información sobre cualquier país y podrás saber diversa información',
    //   shortname: 'Data Mundo 🌎',
    //   description: 'Consulta la información sobre cualquier país y podrás saber diversos datos fácilmente',
    //   orientation: 'portrait',
    //   display: 'standalone',
    //   start_url: '/',
    //   scope: '/',
    //   background_color: '#fff',
    //   theme_color: '#85B840',
    //   icons: [
    //     {
    //       src: path.resolve('src/assets/icon.png'),
    //       sizes: [96, 128, 192, 256, 384, 512],
    //       destination: path.join('Icons'),
    //       ios: true
    //     }
    //   ]
    // }),
    // new WorkboxWebpackPlugin.GenerateSW({
    //   runtimeCaching: [
    //     {
    //       urlPattern: new RegExp('https://petgram-app-danielvm19.danielvm19.vercel.app'),
    //       handler: 'NetworkFirst',
    //       options: {
    //         cacheName: 'images'
    //       }
    //     },
    //     {
    //       urlPattern: new RegExp('https://(res.cloudinary.com|images.unsplash.com)'),
    //       handler: 'CacheFirst',
    //       options: {
    //         cacheName: 'api'
    //       }
    //     }
    //   ]
    // })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            fallback: 'file-loader',
            name: 'images/[name].[hash].[ext]'
          }
        }
      }
    ]
  }
}
