
module.exports = {
  server: {
    port: process.env.PORT || 5000,
  },
  db: {
    db_port: process.env.DB_PORT || 'mongodb://localhost:27017/cashme'
  }
}