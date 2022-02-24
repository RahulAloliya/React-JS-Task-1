import React from 'react'
import { BiMinusCircle } from "react-icons/bi";
import { Input as InputTag  } from 'reactstrap';



const Inner = ({ option, type, state, updatedFunction }) => {

    const  RemoveFieldHandler = (index) => {

        const values = [...state]
        values.splice(index, 1)
        updatedFunction(values)
    }

    const handleChangeInput = (index, event) => {       
        const values = [...state]
        values[index][event.target.name] = event.target.value;
        updatedFunction(values)
    }

  return (
    <>
        <div className="container bg-light py-3 my-3">
            <span>Option {option+1}</span>
            <div className="row">
                <div className="col-5 mt-3">
                    <InputTag 
                        type={type}  
                        placeholder="Placeholder" 
                        name="answer"
                        onChange={ event => handleChangeInput(option, event)}

                    />

                </div>

                <div className="col-2 mt-3">
                    <InputTag type="text" placeholder="Min" />
                </div>

                <div className="col-2 mt-3">
                    <InputTag type="text" placeholder="Max" />
                </div>
                <div className="col-2 mt-3">
                    <InputTag type="number" placeholder="Rows" />
                </div>
                <div className="col-2 d-flex align-items-center">
                    <span className="minusButton" onClick={() =>  RemoveFieldHandler(option) }><BiMinusCircle /></span>
                </div>
            </div>
        </div>
    </>
  )
}

export default Inner 