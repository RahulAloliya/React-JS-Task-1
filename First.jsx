import React ,{useState} from 'react';
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { FaArrowLeft } from 'react-icons/fa';
import { MdAddCircleOutline } from "react-icons/md";
import Inner from './Inner';
const First = () => {
    const [data, updatedata] = useState('');
    const [type,updatetype ] = useState('');
    const [ans,updateAns ] = useState([]);
    
    
    const getQuestion = (e) => {
        updatedata(e.target.value)
    }
    const getData=(e)=>{
        updatetype(e.target.value)
    }
    const AddFieldsHandler = () => {
        updateAns([...ans, {answer:""}])
    }

    const Submits = (e) => {
        e.preventDefault();
        alert(" Form Submitted Successfully")
        updatedata("")
        updatetype("")
        updateAns([])
        console.log({
            question: data,
            answer: ans
        })
    }
    return (
      <>

            <div className="container py-5">
                <span className="Fonts"><FaArrowLeft />Add Question</span>
                <form onSubmit={Submits} >
                    <div className="form-group mt-4">
                    <TextField  
                    className='form-control'
                    label='Question Title'
                    value={data}
                    variant="filled"
                    name="question"
                    onChange={ getQuestion }
                />
                    </div>

                    <div className="form-group mt-4">
                        <FormControl variant="filled" sx={{minWidth :'100%'}}>
                         <InputLabel id='select-lable'>Answere Type</InputLabel>
                         <Select
                         labelId='select-lable'
                         id='demo-select'
                         onChange={getData}
                         value={type}>

                         <MenuItem aria-readonly value="">None</MenuItem>
                         <MenuItem value="text">Text</MenuItem>
                         <MenuItem value="number">Number</MenuItem>
                         <MenuItem value="select">Select</MenuItem>
                         <MenuItem value="textarea">TextArea</MenuItem>
                         <MenuItem value="radio">Radio</MenuItem>
                         <MenuItem value="checkbox">Checkbox</MenuItem>
                         <MenuItem value="range">Slider</MenuItem>
                         
                         </Select>

                        </FormControl>
                    </div>
                    <div>
                    {
                    ans.map( (Elem , Index) => {
                        return(<>
                            {
                                type ?
                                <Inner 
                                    key={Index} 
                                    type={type} 
                                    option={Index} 
                                    state={ans} 
                                    updatedFunction={updateAns}
                                />
                                :  null
                            }

                        </>)
                    })
                }
                <div className="d-flex justify-content-end">
                    {
                        type ? 
                        <span className="addButton" onClick={AddFieldsHandler}> <MdAddCircleOutline /> </span>
                         : null
                    }
                </div>
            </div>

            <div className="form-group mt-3">
                <button className="btn btn-success"> SUBMIT </button>
            </div>
                    
                </form>


            </div>


        </>
    )
}
export default First