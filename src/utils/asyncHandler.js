// using promise methods to handle request
const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
  }
}

export {asyncHandler}



// Example for try catch methods
// const asyncHandler = () => {}
// const asynchandler = (fun) => {}
// const asynchandler = (fun) => async () => {}
/*
const asynchandler = (func) => async (req,res,next) => {
  try{
    await func(req, res, next)
  }catch (error){
    res.status(error.code || 500).json({
      success: false,
      message: error.message
    })
  }
}
*/
