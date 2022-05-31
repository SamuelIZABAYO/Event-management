import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: "1", name: "Kalisa Amily", email: "kalisa@gmail.com" },
    { id: "2", name: "Jhon Doe", email: "jhon@gmail.com" },
];

const AttendeeSlice = createSlice({
    name:'Attendees',
    initialState,
    reducers:{
      addAttendee: (state, action) =>{
          state.push(action.payload);
      },
      editAttendee: (state, action) => {
          const { id, name, email } = action.payload;
          const existingAttendee = state.find(Attendee => Attendee.id === id );
      } 
    }
});

export const { addAttendee,editAttendee } = AttendeeSlice.actions
export default AttendeeSlice.reducer;