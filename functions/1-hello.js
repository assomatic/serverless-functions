// domain/.netlify/functions/1-hello

exports.handler = async (event, context, cb) => {
  return {
    statusCode: 200,
    body: 'Our First Netlify Function Example',
  };
};

// mit callback als dritten Parameter aber ohne async

// exports.handler = (event, context, callback) => {
//   callback(null, {
//     statusCode: 200,
//     body: 'Our  second First Netlify Function Example',
//   });
// };

// Objekte (oder Arrays) müssen stringified werden - sonst error

// const person = { name: 'john' };
// exports.handler = async (event, context) => {
//   console.log(event, context);
//   return {
//     statusCode: 200,
//     body: JSON.stringify(person),
//   };
// };
