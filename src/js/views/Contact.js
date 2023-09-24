import React, {useContext, useState} from "react";
import { Link } from "react-router-dom";
import "../../styles/Contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrashCan, faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Context } from "../store/appContext";


export const Contacts = () => {
	const { store, actions } = useContext(Context);
		return (
			<div className="contactsPage container">
				<Link to="/AddContact">
					<button className="addContact btn btn-success">Add new contact</button>
				</Link>
						{store.contacts.map((item, index) => {
							return (
								<div className="card mb-3 d-flex mx-5" key={index}>
									<div className="row">
										<div className="col-md-2 my-3 mx-5">
										<img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" className="img-fluid rounded-circle" alt="..."/>
										</div>
										<div className="col-md-9">
											<div className="card-body">
												<h5 className="card-title">{item.full_name}</h5>
												<p className="card-text"><FontAwesomeIcon icon={faLocationDot} />{item.address}</p>
												<p className="card-text"><FontAwesomeIcon icon={faPhone} />{item.phone}</p>
												<p className="card-text"><FontAwesomeIcon icon={faEnvelope} />{item.email}</p>
											</div>
										<div className="icons col-md-1">
											<button><FontAwesomeIcon icon={faPencil} className="pencil"/></button>
											<button onClick={() => actions.deleteContact(item.id)}><FontAwesomeIcon icon={faTrashCan} className="trash"/></button>
										</div>
										</div>
									</div>
								</div>
									);
								})}	
			</div>
	);
	};
