class ApiResponse
{
    static success = (responseObject, data) => {
        return responseObject.status(200).json({ message: 'Success', data });
    }
}