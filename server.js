const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public')); // Memuat file statis dari folder "public"
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});