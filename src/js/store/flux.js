const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			
			contacts: [],
			
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


			loadSomeData: () => {
				
				fetch("https://playground.4geeks.com/apis/fake/contact/agenda/agenda1989")
					.then(response => response.json())
					.then((data) => {
						console.log(data)
						setStore({contacts:data})
					})
			}
		}
	};
};

export default getState;
