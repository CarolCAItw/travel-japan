const router = require("express").Router();
const Order = require("../models").orderModel;

router.use((req, res, next) => {
  console.log("有一筆訂單");
  next();
});

router.post("/order", async (req, res) => {
  // const { title, price, img, tag } = req;
  // register the user
  const newOrder = new Order({
    // member: currentUser.user._id,
    member: req.body.member,
    title: req.body.title,
    amount: req.body.amount,
    priceDB: req.body.priceDB,
  });

  try {
    const savedOrder = await newOrder.save();
    res.status(200).send({
      msg: "success",
      savedObject: savedOrder,
    });
  } catch (err) {
    res.status(400).send("出現錯誤");
  }
});

module.exports = router;
