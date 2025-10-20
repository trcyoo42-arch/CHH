const express = require('express');
const app = express();
const port = 4545;

// Middleware untuk melayani file statis (CSS, gambar, dll)
app.use(express.static('public'));

// Route utama
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Trdckr Docker App</title>
      <style>
        body {
          font-family: 'Segoe UI', sans-serif;
          background: linear-gradient(135deg, #0077ff, #00c3ff);
          color: white;
          text-align: center;
          padding-top: 100px;
          margin: 0;
        }
        h1 {
          font-size: 3rem;
          margin-bottom: 20px;
        }
        p {
          font-size: 1.3rem;
          opacity: 0.9;
        }
        .container {
          background: rgba(255, 255, 255, 0.1);
          padding: 40px;
          border-radius: 20px;
          display: inline-block;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }
        footer {
          margin-top: 50px;
          font-size: 0.9rem;
          opacity: 0.8;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>🚀 Hello from Docker - Trdckr Project!</h1>
        <p>Node.js + Express berjalan di dalam container Docker 🎯</p>
      </div>
      <footer>© 2025 Trdckr App | Powered by Docker</footer>
    </body>
    </html>
  `);
});

app.listen(port, '0.0.0.0', () => {
  console.log(`✨ Server running at http://0.0.0.0:${port}`);
});

