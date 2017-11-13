import bodyParser, { urlencoded } from 'body-parser'
import express from 'express'
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// TEMP
const router = express.Router();
router.get('/cities', (req, res) => {
  console.log("meow");

  const cities = [
    {name: 'New York City', population: 8175133},
    {name: 'Los Angeles',   population: 3792621},
    {name: 'Chicago',       population: 2695598}
  ];
  res.json(cities);
})

app.use(router);

app.set('port', (process.env.PORT || 3001));

app.listen(app.get('port'), () => {
  console.log(`Listening on ${app.get('port')}`);
});