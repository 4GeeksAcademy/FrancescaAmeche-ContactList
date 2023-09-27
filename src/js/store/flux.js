const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			
			contacts: [],
			current_contact: null
		},
		actions: {

			createContact: (contact) => {
				
				fetch("https://playground.4geeks.com/apis/fake/contact/", {
					method: "POST",
					body: JSON.stringify(contact),
					headers: {
						"Content-Type": "application/json"
					}
				})
				.then((response) => response.json())
				.then((data) => console.log(data))
			},

			
			deleteContact: (indexDelete) => {
				console.log(indexDelete)
				let requestOptions = {
					method: 'DELETE',
					redirect: 'follow'
				  };
				  
				  fetch("https://playground.4geeks.com/apis/fake/contact/" + indexDelete, requestOptions)
					.then(response => response.json())
					.then(result => console.log(result))
					.then(() => {
						fetch("https://playground.4geeks.com/apis/fake/contact/agenda/agenda1989")
						.then((response) => response.json())
						.then((data) => setStore({ contacts: data}))
					});
			},

			updateContact: (indexUpdate) => {
				console.log(indexUpdate)
				let requestOptions = {
					method: 'PUT',
					redirect: 'follow',
					body: JSON.stringify(contact),
					headers: {
								"Content-Type": "application/json"
							}
						};
				  
			 	  fetch("https://playground.4geeks.com/apis/fake/contact/" + indexUpdate, requestOptions)
					.then(response => response.json())
					.then(result => console.log(result))
			 		.then(() => {
			 			fetch("https://playground.4geeks.com/apis/fake/contact/agenda/agenda1989")
			 			.then((response) => response.json())
			 			.then((data) => setStore({ contacts: data}))
					});
			 },


			loadSomeData: (id) => {
				let path = ""
				id ? path="/"+id : path="/agenda/agenda1989"
			
				fetch("https://playground.4geeks.com/apis/fake/contact" + path)
					.then(response => response.json())
					.then((data) => {
						console.log(data)
						id==false ? setStore({contacts:data}) : setStore({current_contact:data})
					})
				
				
				
			}
			
		}
	};
};

export default getState;
