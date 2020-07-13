const app = require('./app')
const { createConnection } = require('./database')

const port = process.env.port || 5000;

// Connection db
createConnection();

// Server Up!
app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
