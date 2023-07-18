export const update = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      const updateUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: res.body,
        },
        { new: true }
      );
      res.status(200).jsonn(updateUser);
    } catch (err) {
      next(err);
    }
  } else {
    return next(createError(403, "You can update only your account!"));
  }
};
export const deleteUser = async  (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      const updateUser = await User.findByIdAndDelete (
        req.params.id,
      );
      res.status(200).jsonn("User has been deleted!");
    } catch (err) {
      next(err);
    }
  } else {
    return next(createError(403, "You can delete only your account!"));
  }
};
export const getUser = async (req, res, next) => {
    try{
        const userv= await User.findById(req.paramsid)
        res.status(200).json(user)
    }catch(err){
        next(err)
    }
};
export const subscribe = async (req, res, next) => {
    try{
 
    }catch(err){
        next(err)
    }
};
export const unsubscribe = async (req, res, next) => {
    try{
 
    }catch(err){
        next(err)
    }
};
export const like = async (req, res, next) => {
    try{
 
    }catch(err){
        next(err)
    }
};
export const dislike = async (req, res, next) => {
    try{
 
    }catch(err){
        next(err)
    }
};
