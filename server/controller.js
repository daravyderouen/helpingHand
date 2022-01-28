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



module.exports = {
  seed: (req, res) => {
      sequelize.query(`


      create table users (
          user_id SERIAL PRIMARY KEY, 
          username STRING,
          password TEXT(100),
          email STRING(50),
          address VARCHAR(15),
          city varchar
      );

      
      `).then(() => {//make sure in the future that in order for sequelizer to work, PG web and console browser properties must all match, better wise to stick to using all lowercase!
          console.log('DB seeded!')
          res.sendStatus(200)
      }).catch(err => console.log('error seeding DB', err))
  },
  getUsers: (req, res) => {
      sequelize.query(`
      SELECT * FROM users;
      `)
          .then(dbRes => res.status(200).send(dbRes[0]))
          .catch(err => console.log(err))
  },

  createUsers: (req, res) => {
      console.log(req.body)
      let {
          firstname,
          lastname,
          phonenumber,
          dishselected

      } = req.body;


      sequelize
          .query(
              `insert into users (firstname, lastname, phonenumber, dishselected)
              values ('${firstname}', '${lastname}', '${phonenumber}', '${dishselected}');

              select * from users
              where firstname = '${firstname}' and lastname = '${lastname}' and phonenumber = '${phonenumber}' and dishselected = '${dishselected}'
              ;
              `)
          .then((dbRes) => res.status(200).send(dbRes[0]))
          .catch((err) => console.log(err));
  },
  deleteUsers: (req, res) => {
      console.log('delete this user')
      let {id} = req.params
      sequelize.query(`
      DELETE
          FROM users
          WHERE user_id = ${id};
      `)
          .then(dbRes => res.status(200).send(dbRes[0]))
          .catch(err => console.log(err))
  }
}


