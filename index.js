// // index.js
// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");

// const app = express();
// app.use(cors());
// app.use(express.json());

// // Routing awal
// app.get("/", (req, res) => {
//   res.send("Backend Konsultan Aktif!");
// });

// // Tambah route login di sini nanti
// const authRoutes = require("./routes/authRoutes");
// app.use("/api/auth", authRoutes);

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });

// const formRoutes = require("./routes/formRoutes");
// app.use("/api/form", formRoutes);

const express = require('express');
const app = express();
const cors = require('cors');

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const formRoutes = require('./routes/formRoutes');
app.use('/api/form', formRoutes);

// Jalankan server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
