const db = require('../adapter')

function list () {
  return db.get('Population').value()
}

module.exports = { list }
