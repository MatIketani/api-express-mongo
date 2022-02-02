var allowOnlyLocal = (req, res, next) => {
    if (req.connection.remoteAddress !== "::1") {
        res.status(403).json({
            message: "Unauthorized"
        });
    } else {
        next();
    }
}

module.exports = app => app.use(allowOnlyLocal)