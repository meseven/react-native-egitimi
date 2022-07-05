import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (URL) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		getData();
	}, [URL]);

	const getData = async () => {
		try {
			const { data } = await axios(URL);
			setData(data);
		} catch (err) {
			setError(err.message);
		}

		setLoading(false);
	};

	return {
		data,
		loading,
		error,
	};
};

export default useFetch;
