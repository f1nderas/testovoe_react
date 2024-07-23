import { configureStore } from "@reduxjs/toolkit";
import reviewsReducer, { ReviewsState } from "../features/reviews/reviewsSlice";
import faqReducer, { FaqState } from "../features/faq/faqSlice";

export interface RootState {
  reviews: ReviewsState;
  faq: FaqState;
}

export const store = configureStore({
  reducer: {
    reviews: reviewsReducer,
    faq: faqReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
