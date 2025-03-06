class ApiResponse
{
    static success = (responseObject, message, data, statusCode = 200) => {
        return responseObject.status(statusCode).json({ message, data });
    }
}