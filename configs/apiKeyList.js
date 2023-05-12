export let apiKeyList = ["5", "7"];

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

		console.log(newKey);

		const findKey = apiKeyList.find(key => key === newKey);
		
		if (findKey) {
			console.log("Duplicate key found in list! Generating new.");
			newKey = generateRandomString(8);
			return createNewKey();
		} else {
			apiKeyList.push(newKey);
		}
	}
	createNewKey();
	
	console.log(newKey);

	res.json(apiKeyList);
}