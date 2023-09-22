const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			
			Contact: [
				{
					name: "Mike Anamendolla",
					address: "5842 Hillcrest Rd",
					phone: "(870) 288-4149",
					email: "mike.ana@example.com"
				},
			]
			
		},
		actions: {
			// Use getActions to call a function within a fuction
			
			

			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			}
			
		}
	};
};

export default getState;
