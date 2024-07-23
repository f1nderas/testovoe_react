import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import reviewsData from "./reviews.json";
import { v4 as uuidv4 } from "uuid";
import { RootState } from "../../app/store";

export interface Review {
  id: number;
  img: string;
  name: string;
  location: string;
  text: string;
}

export interface ReviewsState {
  reviews: Review[];
}

const initialState: ReviewsState = {
  reviews: reviewsData,
};

const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    addReview: (state, action: PayloadAction<Omit<Review, "id" | "img">>) => {
      const newReview = {
        ...action.payload,
        id: parseInt(uuidv4(), 16),
        img: "https://randomuser.me/api/portraits/women/1.jpg",
      };
      state.reviews.push(newReview);
    },
  },
});
export const { addReview } = reviewsSlice.actions;
export const selectReviews = (state: RootState) => state.reviews;

export default reviewsSlice.reducer;
