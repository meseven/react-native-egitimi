import * as Yup from 'yup';

const validations = Yup.object().shape({
	username: Yup
		.string()
		.required(),
	password: Yup
		.string()
		.required()
});

export default validations;
