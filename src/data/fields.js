import * as Yup from 'yup';

export const name = {
	label: 'Your Name',
	name: 'name',
	id: 'name',
	type: 'text',
	fieldType: 'text',
	required: true,
};

export const password = {
	label: 'Your Password',
	name: 'password',
	id: 'password',
	type: 'text',
	fieldType: 'password',
	required: true,
};
  
export const comment = {
	label: 'Your Comment',
	name: 'comment',
	id: 'comment',
	type: 'textarea',
	fieldType: null,
	required: true,
};

export const gender = {
	label: 'Choose gender',
	name: 'gender',
	id: 'gender',
	type: 'select',
	fieldType: null,
	options: [
		{value: 'mail', label: 'Mail'},
		{value: 'femail', label: 'Femail'},
	],
	required: false,
};

export const validationSchema = () => Yup.object().shape({
	name: Yup.string()
	  .min(2, 'Too Short!')
	  .max(50, 'Too Long!')
	  .required('Required'),
	comment: Yup.string()
	  .min(2, 'Too Short!')
	  .max(200, 'Too Long!')
	  .required('Required'),
});

export const formStructure = [
	name, 
	password, 
	comment, 
	gender,
];
  