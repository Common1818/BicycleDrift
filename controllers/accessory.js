const Product = require("../models/Bicycle");
const { validationResult } = require("express-validator");

exports.createAccessory = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }
  try {
    const accessory = new Product(req.body);
    await accessory.save();
    return res.json({
      accessory,
      messages: [{ msg: `accessory was added Successfully !!!` }],
    });
  } catch (err) {
    console.log(err);
    res.json({
      messages: [{ msg: `Error addding accessory` }],
    });
  }
};
