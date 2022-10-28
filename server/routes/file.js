const router = require("express").Router();
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
let path = require("path");
let File = require("../models/fileModel");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images");
  },
  filename: function (req, file, cb) {
    cb(null, uuidv4() + "-" + Date.now() + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

let upload = multer({ storage, fileFilter });

router.route('/get').get((req, res) => {
  try {
   const image = File.find({})
   res.status(200).json(image)
  } catch(error) {
   res.status(400).json(error)
  }
 })
 

router.route("/add").post(upload.single("uploadedFile"), (req, res) => {
  const photo = req.file.filename;

  const newUserData = {
    photo,
  };
try {
  const data = File.create(newUserData)
  res.status(200).json(data)
  console.log(data)
} catch (error) {
  res.status(404).json(error)
}
});


module.exports = router;
