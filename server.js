const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 8000;
// console.log(process.env);
const routes = require('./routes');

//middleware
//express urlencoded
//express.json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//static folder
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.use(routes);

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/chassisinspection',
  { useNewUrlParser: true }
);

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});
