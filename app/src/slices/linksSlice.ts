import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LinkModel } from "../models/link.model";

export interface LinksState {
  links: LinkModel[];
}
const initialState: LinksState = {
  links: [],
};

const linksSlice = createSlice({
  name: "links",
  initialState,
  reducers: {
    setLinks(state, action: PayloadAction<LinkModel[]>) {
      state.links = action.payload;
    },
  },
});

export const { setLinks } = linksSlice.actions;
export default linksSlice.reducer;
