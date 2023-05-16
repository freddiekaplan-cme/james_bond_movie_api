import dateAndTime from "./date-and-time.js";

export let apiKeyList = [
	{
		key: "00000000"
	}, 
	{
		key: "12345678"
	}
];

export const createKey = (req, res) => {
	
	function generateRandomString(length) {
		let result = "";
		const characters = "0123456789";
		const charactersLength = characters.length;
	  
		for (let i = 0; i < length; i++) {
			const randomIndex = Math.floor(Math.random() * charactersLength);
			result += characters.charAt(randomIndex);
		}
	  
		return result;
		}

	function createNewKey() {
		const newKey = generateRandomString(8);

		const findKey = apiKeyList.find((keyObj) => keyObj.key === newKey);
		
		if (findKey) {
			newKey = generateRandomString(8);
			return createNewKey();
		} else {
			apiKeyList.push({
				key: newKey,
				date: dateAndTime
			});
			console.log("New API key: " + newKey);
		}
		
	}
	createNewKey();

	res.setHeader('Content-Type', 'application/json');
	res.json(apiKeyList);
}

export const deleteKey = (req, res) => {
	const key = req.params.key;

	apiKeyList = apiKeyList.filter((keys) => {
		return keys.key !== key;
	})

	res.setHeader('Content-Type', 'application/json');
	res.json(apiKeyList);
}