import express, { Request, Response } from 'express';
import path from 'path';  // Import path

const app = express();

app.use(express.static('public'));
app.use('/dist/spritevg', express.static('dist/spritevg'));

app.get('/', (_: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

const PORT: number = parseInt(process.env.PORT as string, 10) || 3000;
app.listen(PORT, '0.0.0.0', () => console.log(`Server running on port ${PORT}`));