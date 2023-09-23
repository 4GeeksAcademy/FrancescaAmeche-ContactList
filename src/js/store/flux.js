const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			
			contacts: []
			
		},
		actions: {
			// Use getActions to call a function within a fuction
			
			

			loadSomeData: () => {
				console.log("load some data")
			
				
			fetch("https://playground.4geeks.com/apis/fake/contact/agenda/agenda1989")
				.then(response => response.json())
				.then((data) => setStore({contacts:data}))
				
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			}
			
		}
	};
};

export default getState;
