require('dotenv').config();
const Airtable = require('airtable-node');

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }) // api key
  .base('appcZgsUZHEwgweTE') // base id
  .table('products');

exports.handler = async (event, context, cb) => {
  try {
    const { records } = await airtable.list();
    const products = records.map((product) => {
      const { id } = product;
      const { name, image, price } = product.fields;
      const url = image[0].url;
      return { id, name, price, url };
    });
    return {
      statusCode: 200,
      body: JSON.stringify(products),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: 'Server Error',
    };
  }
};
