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
      const deleteUser = await User.findByIdAndDelete (
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
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
    }catch(err){
        next(err)
    }
};
export const subscribe = async (req, res, next) => {
    try{
      await User.findById(req.user.id, {
        $push: { subscribedUsers: req.params.id }
      });
      await User.findByIdAndUpdate(req.params.id, {
        $inc: { subscribers: 1 }
      })
      res.status(200).json("Subscription Successfull")
    }catch(err){
        next(err)
    }
};
export const unsubscribe = async (req, res, next) => {
  try{
    await User.findById(req.user.id, {
      $pull: { subscribedUsers: req.params.id }
    });
    await User.findByIdAndUpdate(req.params.id, {
      $inc: { subscribers: -1 }
    })
    res.status(200).json("Unsubscription Successfull")
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
