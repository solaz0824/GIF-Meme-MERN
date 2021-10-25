const db = require("../models");

async function signIn(req, res, next) {
  const { uid, email } = req.user;
  try {
    const user = await db.User.findOne({ email: email });

    if (user) {
      return res.sendStatus(200);
    }

    const newUser = await db.User.create({
      firebase_id: uid,
      email: email,
      firstName: req.body.user ? req.body.user.firstName : "",
      lastName: req.body.user ? req.body.user.lastName : "",
      artist: req.body.user ? req.body.user.artist : "",
      userName: req.body.user ? req.body.user.userName : "",
      profileImage: undefined,
    });

    res.status(200).send({
      data: newUser,
    });
  } catch (err) {
    console.log(err);
  }
}
async function getUserById(req, res, next) {
  const { id: userId } = req.params;

  try {
    const user = await db.User.findOne({ firebase_id: userId }).lean();

    res.status(200).send({
      data: user,
    });
  } catch (err) {
    console.log(err);
  }
}
module.exports = {
  signIn,
  getUserById,
};
