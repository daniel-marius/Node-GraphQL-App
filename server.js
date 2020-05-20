const PORT = process.env.PORT || 4000;
const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
