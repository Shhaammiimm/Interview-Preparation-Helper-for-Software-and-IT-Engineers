const dns = require('dns');
const mongoose = require('mongoose');

// Windows often fails SRV lookups via the system resolver; use public DNS.
dns.setServers(['8.8.8.8', '8.8.4.4', '1.1.1.1']);

function getMongoUri() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error(
      'MONGODB_URI is not set. Copy backend/.env.example to backend/.env and paste your Atlas connection string.'
    );
  }
  return uri;
}

async function connectDatabase() {
  const uri = getMongoUri();
  try {
    await mongoose.connect(uri);
    console.log('MongoDB connected');
  } catch (err) {
    if (err.code === 'ECONNREFUSED' && err.syscall === 'querySrv') {
      console.error(
        'MongoDB connection error: DNS could not resolve the Atlas cluster (querySrv ECONNREFUSED).'
      );
      console.error(
        'Try using the standard (non-SRV) connection string from Atlas, or ensure your network allows DNS.'
      );
    } else if (err.code === 8000 || err.codeName === 'AtlasError') {
      console.error('MongoDB connection error: Authentication failed.');
      console.error(
        'In Atlas: Database Access → reset your user password, then update MONGODB_URI in backend/.env (URL-encode special characters, e.g. @ → %40).'
      );
    } else {
      console.error('MongoDB connection error:', err.message);
    }
    throw err;
  }
}

module.exports = { connectDatabase, getMongoUri };
