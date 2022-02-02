var localOnly = (res, req, next)=>{
    if(req.connection.remoteAddress !== '::1'){
        res.status(403).send({ message: "Unauthorized" });
    } else {
        next();
    };
};

module.exports = app => app.use(localOnly);