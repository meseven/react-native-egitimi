const express = require('express');
const app = express();
const port = 3001;

const multer  = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
		const extArray = file.mimetype.split("/");
		const extension = extArray[extArray.length - 1];

    cb(null, Date.now() + '.' + extension)
  }
});

const upload = multer({ storage });

app.post('/upload', upload.single('fileData'), (req, res,next) => {
		res.json({
			status: 1
		});
});

app.listen(port, () => console.log(`Listening on port ${port}!`))
