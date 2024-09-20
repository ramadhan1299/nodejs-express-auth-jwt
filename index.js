const express = require('express');
const router = require('./router');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', router);

app.listen(3000, () => {
  console.log('app running ini port 3000');
});
