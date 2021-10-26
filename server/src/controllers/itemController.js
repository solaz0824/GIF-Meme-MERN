const db = require("../models");

async function createItem(req, res, next) {
  const { image } = req.body;
  const { title, category } = req.body.metadata;
  const { uid } = req.user;
  try {
    const newItem = await db.Item.create({
      title,
      url: image,
      category,
      owner: uid,
    });
    await db.User.findOneAndUpdate(
      { firebase_id: uid },
      {
        $push: { myMemes: [{ _id: newItem._id }] },
      }
    );
    res.status(200).send({
      data: newItem,
    });
  } catch (error) {
    next(error);
  }
}

async function getAllItems(req, res, next) {
  console.log(req);
  try {
    const allItems = await db.Item.find();
    res.status(200).send({
      data: allItems,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createItem,
  getAllItems,
};
