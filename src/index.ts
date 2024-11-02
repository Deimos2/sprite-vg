import express, { Request, Response } from 'express';
import path from 'path';

const app = express();

// Serve static files from `dist/spritevg` to access the bundled assets directly
app.use(express.static(path.join(__dirname, '../spritevg')));

// Serve the main HTML file from `dist/spritevg`
app.get('/', (_: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../spritevg', 'index.html'));
});

const PORT = parseInt(process.env.PORT || '3000', 10);
app.listen(PORT, '0.0.0.0', () => console.log(`Server running on port ${PORT}`));
