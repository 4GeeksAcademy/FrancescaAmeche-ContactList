import React from "react";
import "../../styles/Contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrashCan, faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const ContactCard = (props) => (
	<div className="contactsPage container">
		<Link to="/AddContact">
			<button className="addContact btn btn-success">Add new contact</button>
		</Link>
		<div className="card mb-3 d-flex mx-5">
		<div className="row">
			<div className="col-md-2 my-3 mx-5">
			<img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" className="img-fluid rounded-circle" alt="..."/>
			</div>
			<div className="col-md-9">
				<div className="card-body">
					<h5 className="card-title">{props.name}</h5>
					<p className="card-text"><FontAwesomeIcon icon={faLocationDot} /> {props.address}</p>
					<p className="card-text"><FontAwesomeIcon icon={faPhone} /> {props.phone}</p>
					<p className="card-text"><FontAwesomeIcon icon={faEnvelope} /> {props.email}</p>
				</div>
				<div className="icons col-md-1">
					<FontAwesomeIcon icon={faPencil} className="pencil"/>
					<FontAwesomeIcon icon={faTrashCan} className="trash"/>
				</div>
			</div>
		</div>
		</div>
	</div>
);
