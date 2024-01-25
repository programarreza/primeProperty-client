import { useState } from "react";


const useUserInfo = () => {
	const [user] = useState(JSON.parse(localStorage.getItem('user:details')))
	console.log(user);

	return {user}
};

export default useUserInfo;