import React, {useContext, useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import "../../styles/AddContact.css";
import { Context } from "../store/appContext";

export const AddContact = (props) => {

        const { store, actions } = useContext(Context);
        const params = useParams();
        const [fullName, setFullName] = useState("");
        const [phone, setPhone] = useState("");
        const [email, setEmail] = useState("");
        const [address, setAddress] = useState("");
        const newContact = {full_name: fullName, email: email, agenda_slug: "agenda1989", address: address, phone: phone };
        
        useEffect (()=> {
            actions.loadSomeData(params.id)
        }, [])
    
	return (
		<form>
			<h1 className="d-flex justify-content-center mt-5">{props.opt == "add" ? "Add a new contact" : "Edit contact"}</h1>
			<div className="mb-3 mx-5">
                <label htmlFor="Name" className="form-label">Full Name</label>
                <input value= {store.current_contact && store.current_contact.full_name} onChange={(e) => {setFullName(e.target.value)}} name="Name" type="text" className="form-control" placeholder="Full Name"/>
            </div>
            <div className="mb-3 mx-5">
                <label htmlFor="Email" className="form-label">Email</label>
                <input value= {store.current_contact && store.current_contact.email} onChange={(e) => {setEmail(e.target.value)}} name="Email" type="email" className="form-control" placeholder="Enter email" />
            </div>
            <div className="mb-3 mx-5">
                <label htmlFor="Phone" className="form-label">Phone</label>
                <input value= {store.current_contact && store.current_contact.phone} onChange={(e) => {setPhone(e.target.value)}} name="Phone" type="tel" className="form-control" placeholder="Enter phone" />
            </div>
			<div className="mb-3 mx-5">
                <label htmlFor="Address" className="form-label">Address</label>
                <input value= {store.current_contact && store.current_contact.address} onChange={(e) => {setAddress(e.target.value)}} name="Address" type="tel" className="form-control" placeholder="Enter address" />
            </div>
			<div className="d-grid gap-2">
				<button onClick={() => actions.createContact(newContact)} className="btn btn-primary mx-5 mt-3">Save</button>
				<Link to="/" className="ms-5">
					or get back to contacts
				</Link>
			</div>
        </form>
	);
};
