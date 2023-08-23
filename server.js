const app = require('./app');
require('dotenv').config();
const mongoose = require('mongoose');
// Connetion Database

const DB = process.env.DATABASE_URL.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);

async function main() {
  await mongoose.connect(DB);
  console.log('Database connection successful!');
}

main().catch((err) => console.log(err));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`The Server is Running on port http://localhost:${port}`);
});
