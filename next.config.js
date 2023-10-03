//node.js syntax
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');
module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'Tirelo',
        mongodb_password: 'Unw2eWUWmhBv0A7J',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'my-site',
      },
    };
  }
  //production phase variables
  return {
    //environmental variables: can be used in api routes
    //and in other components
    env: {
      mongodb_username: 'Tirelo',
      mongodb_password: 'Unw2eWUWmhBv0A7J',
      mongodb_clustername: 'cluster0',
      mongodb_database: 'my-site',
    },
  };
};
