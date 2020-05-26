
module.exports = {
  apps : [{
    name: 'strapi',
    script: 'server.js',
    env: {
      NODE_ENV: '',
      DATABASE_HOST: '', // database Endpoint under 'Connectivity & Security' tab
      DATABASE_PORT: '',
      DATABASE_NAME: '',  // DB name under 'Configuration' tab
      DATABASE_USERNAME: '', // default username
      DATABASE_PASSWORD: '',
    },
  }],
};
