const { Sequelize } = require("sequelize");
const mysqlConfig = require("../configs/database");

const sequelize = new Sequelize({
  username: mysqlConfig.MYSQL_USERNAME,
  password: mysqlConfig.MYSQL_PASSWORD,
  database: mysqlConfig.MYSQL_DB_NAME,
  port: 3306,
  dialect: "mysql",
  logging: false,
});

const Post = require("../models/post")(sequelize);
const User = require("../models/user")(sequelize);
const Session = require("../models/session")(sequelize);

Post.belongsTo(User, { foreignKey: "user_id" });
User.hasMany(Post, { foreignKey: "user_id" });

Session.belongsTo(User, { foreignKey: "user_id" });
User.hasMany(Session, { foreignKey: "user_id" });

module.exports = {
  sequelize,
  Post,
  User,
  Session,
};
