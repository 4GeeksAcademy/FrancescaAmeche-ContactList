import React from "react";
import { Link } from "react-router-dom";
import "../../styles/demo.css";

export const Demo = () => {

	return (
		<form>
			<h1 className="d-flex justify-content-center mt-5">Add a new contact</h1>
			<div className="mb-3 mx-3">
                <label htmlFor="Name" className="form-label">Full Name</label>
                <input type="text" className="form-control" placeholder="Full Name" />
            </div>
            <div className="mb-3 mx-3">
                <label htmlFor="Email" className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="Enter email" />
            </div>
            <div className="mb-3 mx-3">
                <label htmlFor="Phone" className="form-label">Phone</label>
                <input type="tel" className="form-control" placeholder="Enter phone" />
            </div>
			<div className="mb-3 mx-3">
                <label htmlFor="Address" className="form-label">Address</label>
                <input type="tel" className="form-control" placeholder="Enter address" />
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
