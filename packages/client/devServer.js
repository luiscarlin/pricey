const ParcelProxyServer = require('parcel-proxy-server')

const port = 3000

const server = new ParcelProxyServer({
  entryPoint: './index.html',
  parcelOptions: {
    open: true,
  },
  proxies: {
    '/api': {
      target: 'http://localhost:5000',
      changeOrigin: true,
      // pathRewrite: { '^/api': '' },
    },
  },
})

server.listen(port, () =>
  console.log(`Dev server started on http://localhost:${port}`)
)
