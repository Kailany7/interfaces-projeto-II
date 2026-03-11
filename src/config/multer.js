import multer from 'multer';
import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const armazen = multer.diskStorage({
    destination: (req, file, cb) => { 
        cb(null, path.resolve(__dirname, '..', 'uploads')); 
    },
    filename: (req, file, cb) => {
        crypto.randomBytes(16, (err, hash) => {
            if (err) return cb(err);
            
            const fileName = `${hash.toString('hex')}${path.extname(file.originalname)}`;
            cb(null, fileName);
        });
    }
});

const uploadImagens = multer({ storage: armazen });

export default uploadImagens;