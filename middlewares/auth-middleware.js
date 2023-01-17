const ApiError = require('../exceptions/api-error');
const tokenService = require('../service/token-service');

module.exports = function (req, res, next) {
    try {
        req.user = userData;
        next();
    } catch (e) {
        return next(ApiError.UnauthorizedError("hz"));
    }
};
