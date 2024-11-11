import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PersonModel } from "../models/person.model";

export interface PersonState {
  person: PersonModel | null;
}
const initialState: PersonState = {
  person: null,
};

const personSlice = createSlice({
  name: "person",
  initialState,
  reducers: {
    setPerson(state, action: PayloadAction<PersonModel>) {
      state.person = action.payload;
    },
  },
});

export const { setPerson } = personSlice.actions;
export default personSlice.reducer;
