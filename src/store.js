import { configureStore } from '@reduxjs/toolkit'
import AttendeesReducer from './feature/attendees/AttendeeSlice'

export const store = configureStore({
  reducer: {
    Attendees: AttendeesReducer
  },
})

