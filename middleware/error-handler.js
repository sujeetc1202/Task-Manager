const errorHandlerMiddleware = (err, req, res, next) => {
  return res.status(500).json({ msg: `Somthing went wrong. try again later` });
};

module.exports = errorHandlerMiddleware;
