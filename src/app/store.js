import { configureStore } from '@reduxjs/toolkit';
import filterReudcer from "../features/filter/filterSlice";
import relatedVideoReducer from "../features/relatedVideos/relatedVideosSlice";
import tagsReducer from "../features/tags/tagsSlice";
import videoReducer from "../features/video/videoSlice";
import videosReducer from "../features/Videos/videosSlice";

export const store = configureStore({
  reducer: {
    videos : videosReducer,
    tags : tagsReducer,
    video : videoReducer,
    relatedVideos : relatedVideoReducer,
    filter : filterReudcer,
  },
});
