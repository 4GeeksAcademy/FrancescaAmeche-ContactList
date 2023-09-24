const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			
			contacts: [],
			new: []
		},
		actions: {
			// Use getActions to call a function within a fuction

			createContact: () => {
				const store = getStore();
				console.log(store.new)
				fetch("https://playground.4geeks.com/apis/fake/contact/", {
					method: "PUT",
					body: JSON.stringify(store.new),
					headers: {
						"Content-Type": "application/json"
					}
				})
				.then((response) => response.json())
				.then((data) => console.log(data))
				.then(() => {
					fetch("https://playground.4geeks.com/apis/fake/contact/agenda/agenda1989")
					.then((response) => response.json())
					.then((data) => setStore({ contacts: data}))
				});
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
				console.log("load some data")
			
				fetch("https://playground.4geeks.com/apis/fake/contact/agenda/agenda1989")
					.then(response => response.json())
					.then((data) => setStore({contacts:data}))
				
				
				
			}
			
		}
	};
};

export default getState;
