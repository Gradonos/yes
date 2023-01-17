const ApiError = require('../exceptions/api-error');
const tokenService = require('../service/token-service');

module.exports = function (req, res, next) {
    try {
        const authorizationHeader = req.headers.authorization;
        if (!authorizationHeader) {
            return next(ApiError.UnauthorizedError("header"));
        }

       const token = req.headers["authorization"];
        if (!accessToken) {
            return next(ApiError.UnauthorizedError("access"));
        }

        const userData = tokenService.validateAccessToken(accessToken);
        if (!userData) {
            return next(ApiError.UnauthorizedError("userdata"));
        }

        req.user = userData;
        next();
    } catch (e) {
        return next(ApiError.UnauthorizedError("hz"));
    }
};
