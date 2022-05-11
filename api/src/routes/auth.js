const authControllers = require("../controllers/auth");
const {
  sessionAuthorizeLoggedInUser,
} = require("../middlewares/authmiddleware");

const router = require("express").Router();

router.post("/login", authControllers.loginUser);
router.post("/register", authControllers.registerUser);
router.get("/refresh-token", authControllers.keepLogin);

router.post("/session/login", authControllers.sessionLoginUser);
router.get(
  "/session/refresh-token",
  sessionAuthorizeLoggedInUser,
  authControllers.sessionKeepLogin
);

module.exports = router;
