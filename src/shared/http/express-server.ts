import { expressApp } from './express-app';

const port = 3000;

expressApp.get('/', (req, res) => {
  res.send('Hello World!');
});

expressApp.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
