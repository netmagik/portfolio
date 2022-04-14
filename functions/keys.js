const { USER_ID } = process.env;

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: USER_ID,
  };
};