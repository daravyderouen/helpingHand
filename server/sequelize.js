const {Sequelize} = require('sequelize')

const sequelize = new Sequelize(
  "",
  {
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
)

module.exports = sequelize