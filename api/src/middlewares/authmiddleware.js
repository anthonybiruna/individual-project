const req = require("express/lib/request");
const { verifySession } = require("../lib/session");

const sessionAuthorizeLoggedInUser = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const verifiedToken = await verifySession(token);

    if (!verifiedToken) throw new Error("session expired");

    req.token = verifiedToken.dataValues;

    next();
  } catch (err) {
    console.log(err);
    return res.status(419).json({
      message: err.message,
    });
  }
};

module.exports = { sessionAuthorizeLoggedInUser };
