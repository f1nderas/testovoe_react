import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import faqData from "./faq.json";
import { RootState } from "../../app/store";

interface Question {
  id: number;
  question: string;
  answer: string;
}

export interface FaqState {
  questions: Question[];
  openQuestionId: number | null;
}

const initialState: FaqState = {
  questions: faqData,
  openQuestionId: null,
};

const faqSlice = createSlice({
  name: "faq",
  initialState,
  reducers: {
    toggleQuestion(state, action: PayloadAction<number>) {
      state.openQuestionId =
        state.openQuestionId === action.payload ? null : action.payload;
    },
    setQuestions(state, action: PayloadAction<Question[]>) {
      state.questions = action.payload;
    },
  },
});

export const { toggleQuestion, setQuestions } = faqSlice.actions;
export const selectFaq = (state: RootState) => state.faq;

export default faqSlice.reducer;
