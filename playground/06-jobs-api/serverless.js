const serverless = require("aws-serverless-express");
const {app, connectToDbAsync} = require("./app");

module.exports.handler = async (event, context) => {
    try {

        await connectToDbAsync();
        const server = serverless.createServer(app);
        return serverless.proxy(server, event, context, 'PROMISE').promise;
    } catch (error) {
        console.error('Database connection failed', error);
    }
};

// module.exports.handler = async (event) => {
//   return {
//     statusCode: 200,
//     body: JSON.stringify(
//       {
//         message: 'Go Serverless v3.0! Your function executed successfully!',
//         input: event,
//       },
//       null,
//       2
//     ),
//   };
// };
