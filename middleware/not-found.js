const notFound = (req, res) => res.status(404).send("Route doen't exists!");

module.exports = notFound;
