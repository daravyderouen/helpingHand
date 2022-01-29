const Sequelize = require("sequelize");

const { CONNECTION_STRING } = process.env;

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: "postgres",
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
})



module.exports = {
  seed: (req, res) => {
      sequelize.query(`


      create table users (
          user_id SERIAL PRIMARY KEY, 
          email TEXT(100),
          password TEXT(100),
      ),
      create table tasks (
        task_id SERIAL PRIMARY KEY, 
        poster_id INTEGER reference users,
        claimer_id INTEGER reference users,
        description TEXT(200),
        driving_assistance(boolean),
        address STRING(200)
        timestamp TIMESTAMP
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
          email,
          password,

      } = req.body;


      sequelize
          .query(
              `insert into users (email, password)
              values ('${email}', '${password}';

              select * from users
              where email = '${email}' and password = '${password}' 
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


