export default class Utils {
    response(httpStatus, message, statusCode) {
        const output = {
            message,
            httpStatus,
            statusCode
        }
        return output
    }
}