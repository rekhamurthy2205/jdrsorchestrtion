const swaggerAutogen = require('swagger-autogen')();

const outputFileUser = './swagger-useroutput.json';
const endpointsFilesUser = ['./src/routes/user.route.js'];






const docUser = {
  info: {
    title: 'TASK Management',
    description: 'TASK',
  },
  host: 'localhost:3000',
  basePath: '/api/v1/user',
  schemes: ['http', 'https'],
};


// const docTask = {
//     info: {
//       title: 'TASK Management',
//       description: 'TASK',
//     },
//     host: 'localhost:3000',
//     basePath: '/api/v1/user',
//     schemes: ['http', 'https'],
//   };
  



swaggerAutogen(outputFileUser, endpointsFilesUser, docUser);

// swaggerAutogen(outputFileTask, endpointsFilesTask, docTask);
