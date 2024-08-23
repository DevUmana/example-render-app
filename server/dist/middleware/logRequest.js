const logRequest = (req, _res, next) => {
    console.log(`${req.method} request received to ${req.url}`);
    next();
};
export default logRequest;
