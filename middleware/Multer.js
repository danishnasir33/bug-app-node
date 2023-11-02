const multer = require('multer')
const path = require('path')

const {
  Exception
} = require('../helpers')

const {
  ErrorCodes,
  BugConstants
} = require('../constants')

class Multer {

  static fileFilter(req, file, cb) {
    try {
      const filetypes = /png|gif/;
      const mimetype = filetypes.test(file.mimetype);
      const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

      if (mimetype && extname) {
        return cb(null, true);
      } else {
        throw new Exception(BugConstants.MESSAGES.SCREEN_SHOT_NOT_VALID, ErrorCodes.BAD_REQUEST, {
          reportError: true,
        }).toJson();
      }
    } catch (error) {
      console.error(error);
      cb(error);
    }
  }

  static setupMulter() {

    const storage = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, './uploads/')
      },
      filename: function (req, file, cb) {
        // cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
        cb(null, new Date().toISOString() + file.originalname)
      }
    });

    // Create the multer instance
    return multer({ storage: storage, fileFilter: Multer.fileFilter })
  }
}

module.exports = Multer