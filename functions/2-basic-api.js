const items = require('../assets/data.js');

exports.handler = async (event, context) => {
  return {
    // Zugriff nur von 'innen' erlaubt:
    // headers: {
    //   'Access-Control-Allow-Origin': '*',
    // },
    statusCode: 200,
    body: JSON.stringify(items),
  };
};

// headers erlaubt Zugriff auch von ausserhalb des Apps
