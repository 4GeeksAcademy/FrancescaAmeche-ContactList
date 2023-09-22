import React, {useState, useContext} from "react";
import { Link } from "react-router-dom";
import "../../styles/AddContact.css";
import { Context } from "../store/appContext";

export const AddContact = () => {

    const {store, actions} = useContext(Context);
    const [state, setState] = useState({
        Name:"",
        Email:"",
        Phone:"",
        Address:""
    });
  

    const handleChange = (e) => {
        setState({
          ...state,
          [e.target.name]: e.target.value
        });
      };
    
	return (
		<form onSubmit={handleChange}>
			<h1 className="d-flex justify-content-center mt-5">Add a new contact</h1>
			<div className="mb-3 mx-3">
                <label htmlFor="Name" className="form-label">Full Name</label>
                <input value= {state.Name} onChange={handleChange} name="Name" type="text" className="form-control" placeholder="Full Name"/>
            </div>
            <div className="mb-3 mx-3">
                <label htmlFor="Email" className="form-label">Email</label>
                <input value= {state.Email} onChange={handleChange} name="Email" type="email" className="form-control" placeholder="Enter email" />
            </div>
            <div className="mb-3 mx-3">
                <label htmlFor="Phone" className="form-label">Phone</label>
                <input value= {state.Phone} onChange={handleChange} name="Phone" type="tel" className="form-control" placeholder="Enter phone" />
            </div>
			<div className="mb-3 mx-3">
                <label htmlFor="Address" className="form-label">Address</label>
                <input value= {state.Address} onChange={handleChange} name="Address" type="tel" className="form-control" placeholder="Enter address" />
            </div>
			<div className="d-grid gap-2">
				<button type="submit" className="btn btn-primary mx-3">Save</button>
				<Link to="/" className="ms-3">
					or get back to contacts
				</Link>
			</div>
        </form>
	);
};
