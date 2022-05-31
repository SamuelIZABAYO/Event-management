import { Route, Routes } from "react-router-dom";
import AddAttendee from "./feature/attendees/AddAttendee";
import EditAttendee from "./feature/attendees/EditAttendee";
import AttendeeList from "./feature/attendees/AttendeeList";


function App() {
  return (
    <div className="container mx-auto px-2 max-w-5xl pt-10 md:pt-32">
      <h1 className="text-center font-bold text-2xl text-gray-700">ATTENDING APP </h1>
      
      <Routes>
        <Route path="/" element={<AttendeeList/>} />
        <Route path="/add-Attendee" element={<AddAttendee/>} />
        <Route path="/edit-Attendee/:id" element={<EditAttendee/>} />
      </Routes>
    </div>
  );
}

export default App;
