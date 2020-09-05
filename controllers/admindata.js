const Admindata = require("../models/Admindata");
const { validationResult } = require("express-validator");

exports.addCarouselImage = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }

  try {
    await Admindata.deleteMany();
    const admindata = new Admindata(req.body);
    await admindata.save();
    res.json({
      admindata,
      messages: [{ msg: `"Carousel was added Successfully` }],
    });
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .json({ errors: [{ msg: `Error Adding Carousel Data` }] });
  }
};

exports.getCarouselImage = async (req, res) => {
  try {
    const carouselImages = await Admindata.find({});
    const imagesArray = carouselImages[0];
    const { carousel } = imagesArray;
    res.json({ carousel });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      errors: [
        {
          msg: `Error Getting Carousel Images`,
        },
      ],
    });
  }
};

exports.deleteCarouselImage = async (req, res) => {
  try {
    await Admindata.deleteMany();
    res.json({
      messages: [{ msg: `Deleted carousel data Successfully` }],
    });
  } catch (err) {
    return res.status(400).json({
      errors: [
        {
          msg: `Error Getting Carousel Images`,
        },
      ],
    });
  }
};
