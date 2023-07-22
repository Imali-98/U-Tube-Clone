import Video from "./Video.model.js";

export const addVideo = async (req, res, next) => {
  const newVideo = new Video({ userId: req.user.id, ...req.body });
  // try {
  //   const savedVideo = await newVideo.save();
  //   res.status(200).json(savedVideo);
  // } catch (err) {
  //   next(err);
  // }
};
export const updateVideo = async (req, res, next) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) return next(createError(404, "User not found"));
    if (req.user.id === video.userId) {
      const updatedVideo = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedVideo);
    } else {
      return next(createError(403, "U can only update your video!"));
    }
  } catch {}
};
export const deleteVideo = async (req, res, next) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) return next(createError(404, "User not found"));
    if (req.user.id === video.userId) {
       await User.findByIdAndDelete(
        req.params.id,
      );
      res.status(200).json("Video has been deleted!");
    }
  } catch (err) {
    next(err);
  }
};
export const getVideo = async (req, res, next) => {
  try{
    const video = await Video.findById(req.params.id);
    res.status(200).json(video);

  }
  catch{}
};
