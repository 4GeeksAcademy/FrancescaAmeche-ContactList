import React, {useContext, useState} from "react";
import { Link } from "react-router-dom";
import "../../styles/Contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrashCan, faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { ContactCard } from "../component/ContactCard";
import { AddContact } from "./AddContact";
import { Context } from "../store/appContext";


export const Contact = () => {
	const { store, actions } = useContext(Context);
	return (
	<div className="contactsPage container">
		<Link to="/AddContact">
			<button className="addContact btn btn-success">Add new contact</button>
		</Link>
		<ContactCard></ContactCard>
	</div>
);
}
