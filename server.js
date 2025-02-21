const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const users = {
  'user1': { username: 'user1', password: 'password1' },
  'user2': { username: 'user2', password: 'password2' }
};

app.use(bodyParser.json());

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = users[username];

  if (user && user.password === password) {
    res.json({ success: true, message: 'Login successful!' });
  } else {
    res.json({ success: false, message: 'Invalid username or password.' });
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
