"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorResponse = /** @class */ (function () {
    function ErrorResponse(error, message) {
        this.error = error;
        this.message = message;
    }
    return ErrorResponse;
}());
exports.ErrorResponse = ErrorResponse;
