const multer = require('multer');
const path = require('path');

// Konfigurasi penyimpanan file
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      // Tentukan folder penyimpanan
      cb(null, '/Users/khalid093/Documents/MyProject/Flutter/Vehicle-Rent-App/Images');
    },
    filename: (req, file, cb) => {
      // Buat nama file unik dengan timestamp
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      const ext = path.extname(file.originalname);
      cb(null, file.fieldname + '-' + uniqueSuffix + ext);
    },
  });
  
  // Filter file (hanya menerima gambar)
  const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Hanya file gambar yang diizinkan!'), false);
    }
  };
  
  // Inisialisasi Multer
  const upload = multer({ storage, fileFilter });
  
  module.exports = upload;