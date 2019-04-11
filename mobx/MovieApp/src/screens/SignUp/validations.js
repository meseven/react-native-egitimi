import * as Yup from "yup";

const validations = Yup.object().shape({
	email: Yup
		.string()
		.email()
		.required(),
	password: Yup
		.string()
		.min(6)
		.required(),
	passwordConfirm: Yup
		.string()
		.oneOf([Yup.ref('password')], 'Passwords not matched.')
		.required()
});

module.exports = validations;
