import { createSlice } from "@reduxjs/toolkit";

const personInfo = createSlice({
  name: "favorites",
  initialState: {
    person: { name: "", surname: "", age: "", termsAndConditions: false },
  },
  reducers: {
    setPerson: (state, action) => {
      state.person.name = action.payload.name;
      state.person.surname = action.payload.surname;
      state.person.age = action.payload.age;
      state.person.termsAndConditions = action.payload.termsAndConditions;
    },
  },
});

export const setPerson = personInfo.actions.setPerson;
export default personInfo.reducer;
