import { ApolloServer } from 'apollo-server-micro';
import dbConnect from '../../libs/dbConnect';
import { schema } from '../../apollo/schema';
dbConnect()
  .then(() => {
    console.log('DB Connected');
  })
  .catch((err) => {
    console.log('Error ' + err);
  });
const apolloServer = new ApolloServer({
  schema,
  engine: {
    reportSchema: true,
  },
  context(ctx) {
    return ctx;
  },
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: '/api/graphql' });
