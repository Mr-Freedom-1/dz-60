import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url';
import { createRequire } from 'node:module';
import fs, { promises}  from 'fs';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const require = createRequire(import.meta.url);

const PORT = process.env.PORT || 3000;

if(process.env.NODE_ENV == 'development') {
        console.log('development mode');
    } else {
        console.log('production mode');
}

const app = express();

// Завдання №3
// app.get('/', (req, res) => {
//   fs.readFile(path.join(__dirname, 'package.json'), (err, data) => {
//     if (err) {
//       console.error(err);
//     }
//     const message = `<h1>Wellcome</h1><h2>Json Text:</h2><pre>${data}</pre>`;
//     res.send(message);
//   });
// });

app.get('/', async (req, res) => {
    try {
      const filePath = path.join(__dirname, 'package.json');
      const data = await promises.readFile(filePath);
      const message = `<h1>Wellcome</h1><h2>Json Text:</h2><pre>${data}</pre>`;
      res.send(message);
    } catch (err) {
      console.error(err);
    }
});

app.listen(PORT, ()=> {
    console.log(`Server started on http://localhost:${PORT}`);
})

