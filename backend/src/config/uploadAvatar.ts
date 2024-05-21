import multer from 'multer';
import path from 'path';
import crypto from 'crypto';

const directoryFile = path.resolve(__dirname, '..', '..', 'tmp', 'avatar');

export default {
  directory: directoryFile,
  storage: multer.diskStorage({
    destination: directoryFile,
    filename(request, file, callback) {
      const fileHash = crypto.randomBytes(10).toString('hex');
      const fileName = `avatar-${fileHash}-${file.originalname}`;
      return callback(null, fileName);
    },
  }),
};
