import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import Button from "../../components/Button"
import TextField from "../../components/TextField"
import { editAttendee } from "./AttendeeSlice"


const EditAttendee = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const Attendees = useSelector(store => store.Attendees);
    const navigate = useNavigate();
    const existingAttendee = Attendees.filter(Attendee => Attendee.id === params.id);
    const { name, email } = existingAttendee[0];
    const [values, setValues] = useState({
      name,
      email
    });

    const handleEditAttendee = () =>{
        setValues({name:'',  email:''});
        dispatch(editAttendee({
          id: params.id,
          name: values.name,
          email: values.email
        }));
        navigate('/');
    }

  return (
    <div className="mt-10 max-w-xl mx-auto">
        <TextField
        label="Name"
        values={values.name}
        onChange={(e) => setValues({...values, name: e.target.value})}
        inputProps={{ type: 'text', placeholder: 'Jhon Doe'}}
        />
        <br/>
        <TextField
        label="Email"
        value={values.email}
        onChange={(e) => setValues({...values, email: e.target.value})}
        inputProps={{ type: 'email', placeholder: 'jhondoe@gmail.com'}}
        />
        <Button onClick={handleEditAttendee}>Edit</Button>
    </div>
  )
}

export default EditAttendee