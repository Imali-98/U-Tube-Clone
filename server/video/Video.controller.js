import pkg from 'mongoose';
import Video from "./Video.model.js";
import User from "../user/User.model.js";
const { Promise } = pkg;

export const addVideo = async (req, res, next) => {
  const newVideo = new Video({ userId: req.user.id, ...req.body });
  try {
    const savedVideo = await newVideo.save();
    res.status(200).json(savedVideo);
  } catch (err) {
    next(err);
  }
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
      console.log(req.params.id);
      res.status(200).json(updatedVideo);
    } else {
      return next(createError(403, "U can only update your video!"));
    }
  } catch (err) {
    next(err);
  }
};
export const deleteVideo = async (req, res, next) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) return next(createError(404, "User not found"));
    if (req.user.id === video.userId) {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("Video has been deleted!");
    } else {
      return next(createError(403, "U can only delete your video!"));
    }
  } catch (err) {
    next(err);
  }
};

export const getVideo = async (req, res, next) => {
  try {
    const video = await Video.findById(req.params.id);
    res.status(200).json(video);
  } catch (err) {
    next(err);
  }
};

export const addView = async (req, res, next) => {
  try {
    await Video.findByIdAndUpdate(req.params.id, {
      $inc: { views: 1 },
    });
    res.status(200).json("Views Increased");
  } catch (err) {
    next(err);
  }
};

export const trend = async (req, res, next) => {
  try {
    const videos = await Video.find({ views: -1 });
    res.status(200).json(videos);
  } catch (err) {
    next(err);
  }
};

export const random = async (req, res, next) => {
  try {
    const videos = await Video.aggregate([{ $sample: { size: 40 } }]);
    res.status(200).json(videos);
  } catch (err) {
    next(err);
  }
};

export const sub = async (req, res, next) => {
    try{
      const user = await User.findById(req.user.id);
      const subscribedChannels = user.subscribedUsers;
      const list = Promise.all(
        subscribedChannels.map((channelid)=>{
          return Video.find( {userId: channelid})
        })
        )
      res.status(200).json(list.flat().sort((a,b)=>(b.createdAt-a.createdAt)));
    }
    catch (err) {
      next(err);
    }
};

export const getByTag = async (req, res, next) => {
  const tags = req.body.tags.spilt(",");
  try {
    const videos = await Video.find({ tags: { $in: tags } }).limit(20);
    res.status(200).json(videos);
  } catch (err) {
    next(err);
  }
};

export const search = async (req, res, next) => {
  const query = req.query.q;
  try {
    const videos = await Video.find({
      title: { $regex: query, $options: "i" },
    }).limit(40);
    res.status(200).json(videos);
  } catch (err) {
    next(err);
  }
};
