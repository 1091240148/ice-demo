export default {
  local: {
    baseURL: `http://localhost:${process.env.SERVER_PORT}/api`
  },
  dailt: {
    baseURL: 'http://192.168.60.254:32008/api'
  },
  prod: {
    baseURL: 'https://example.com/api'
  }
}