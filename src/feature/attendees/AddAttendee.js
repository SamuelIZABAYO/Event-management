import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';
import Button from "../../components/Button"
import TextField from "../../components/TextField"
import { addAttendee } from "./AttendeeSlice"


const AddAttendee = () => {
  const dispatch = useDispatch()
    const navigate = useNavigate();
    const [values, setValues] = useState({
        name: '',
        email: ''
    });
    const [ status , setStatus] = useState('');

    const handleAddAttendee = () =>{
      const denied = document.getElementById('Status_Denied');
      const confirmed = document.getElementById('Status_Confirmed');
        setValues({name:'', email:''})
        if( denied.checked ){
          setStatus(denied.value)
        }
        if( confirmed.checked ){
          setStatus(confirmed.value)
        }
        dispatch(addAttendee({
          id: uuidv4(),
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
         {/* <label htmlFor='Status_Denied'>Denied</label>
            <input type='checkbox' name='status' onChange={handleAddAttendee} id='Status_Denied'value='Denied'/>
            <label htmlFor='Status_Confirmed'>Confirmed</label><br/>
            <input type='checkbox' id='Status_Confirmed' onChange={handleAddAttendee} name='status' value='Confirmed'/> */}

        <Button onClick={handleAddAttendee}>Submit</Button>
    </div>
  )
}

export default AddAttendee