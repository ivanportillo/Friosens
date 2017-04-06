const errorResponse = (req, res, error) => {
  res.status(error.statusCode).json({ error: error.message });
};

const createResponse = (req, res) => {
  return (error, data, message) => {
   if (error) { errorResponse(req, res, error) }
   else {
     const response = {
       data: (data) ? data : undefined,
       message: (message) ? message : undefined
     };
     res.status(200).json(response);
   }
  }
};

module.exports = {
  createResponse
};