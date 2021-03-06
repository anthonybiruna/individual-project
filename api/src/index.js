const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT;

const { sequelize } = require("./lib/sequelize");
sequelize.sync({ alter: true });

const app = express();

app.use(cors());
app.use(express.json());

const { postRoutes, authRoutes } = require("./routes");

app.use("/post_images", express.static(`${__dirname}/public/posts`));

app.use("/posts", postRoutes);
app.use("/auth", authRoutes);

app.listen(PORT, () => {
  console.log("listening in port", PORT);
});
