const express = require('express');
const axios = require('axios');
var app = express();
const ExpressError = require("./expressError");
const router = express.Router();

app.use(express.json())

app.get('/', (req, res) => {
  res.send(users)
})


// app.post('/', async (req, res) => {
//   const result = [];
//   let data = req.body;
//   let users = Object.values(data)
//   await Promise.all(users.map(async user => {
//     await Promise.all(user.map(async u => {
//       await axios.get(`https://api.github.com/users/${u}`)
//         .then(function (response) {
//           let name = response.data.name
//           let bio = response.data.bio
//           result.push({
//             "bio": bio,
//             "name": name
//           })
//           console.log(result)
//         })
//     }))
//   }))
//   return res.send(result)
// })

app.post('/', async function (req, res, next) {
  try {
    let result = await Promise.all(req.body.developers.map(async user => {
      return await axios.get(`https://api.github.com/users/${user}`);
    }))
    let output = result.map(r => ({ bio: r.data.bio, name: r.data.name }));

    return res.send(JSON.stringify(output));
  } catch (err) {
    let error = new ExpressError("User Not Found", 404);
    next(error)
  }
});




app.use((req, res, next) => {
  return new ExpressError("No User Found", 404);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);

  return res.json({
    status: err.status,
    message: err.message
  });
});


module.exports = app;