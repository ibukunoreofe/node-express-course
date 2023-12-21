const requestLogger = (req, res, next) => {
    console.log(`Incoming request: ${req.method} ${req.path}`);
    next(); // Pass control to the next handler
};

/**
app.all('*', (req, res, next) => {
    console.log(`Incoming request: ${req.method} ${req.path}`);
    next(); // Pass control to the next handler
});
 **/

module.exports = { requestLogger }
