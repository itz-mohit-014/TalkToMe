const asyncHandler = ( func ) => {
    return async (req, res, next) => {
        try {
            await func(req, res, next); 
        } catch (error) {
            console.log(error)
        }
        
    }
}

export default asyncHandler