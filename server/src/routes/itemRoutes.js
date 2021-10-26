const Router = require("express").Router;
const { authMiddleware } = require("../middleware");
const { itemController } = require("../controllers");

const itemRouter = Router();

itemRouter.post("/", authMiddleware, itemController.createItem);
itemRouter.get("/", itemController.getAllItems);

module.exports = {
  itemRouter,
};
