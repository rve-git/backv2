
module.exports = {
  apps : [{
    name: 'strapi',
    script: 'server.js',
    env: {
      NODE_ENV: 'DEVELOPMENT',
      DATABASE_HOST: '31.14.142.206', // database Endpoint under 'Connectivity & Security' tab
      DATABASE_PORT: '3306',
      DATABASE_NAME: 'mymexico',  // DB name under 'Configuration' tab
      DATABASE_USERNAME: 'articler', // default username
      DATABASE_PASSWORD: 'CT99FZxxmBMEYzUuCHKXJe3j',
    },
  }],
};
