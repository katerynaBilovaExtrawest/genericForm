import { 
	Button, 
	FormControl, 
	FormHelperText, 
	makeStyles, 
	TextField, 
} from '@material-ui/core';
import { useFormik } from 'formik';

const useStyles = makeStyles(() => ({
	formControl: {
		width: '100%',
		margin: '20px 0'
	}
}))

/* 
	* @param {onSubmit} - function on submit form,
	* @param {validationSchema} - function that describes fields validation,
	* @param {formStructure} - array of form fields,
	* @param {loading} - loading after submitting form  
*/

export const Form = ({
	onSubmit,
	validationSchema,
	formStructure,
	loading
}) => {
	const classes = useStyles();

	const { handleSubmit, values, handleChange, errors } = useFormik({
		initialValues: {},
		validationSchema: validationSchema,
		onSubmit: onSubmit,
	});

	return (
		<form onSubmit={handleSubmit} className={classes.root}>
			{formStructure.map((field, i) => (
				<FormControl className={classes.formControl} key={field?.name + i}>
				{(field?.type === "text" || 
					field?.type === "textarea") && 
					(
						<>
							<TextField 
								type={field?.fieldType ?? field?.type}
								multiline={field?.type === "textarea"}
								rows={4}
								label={field?.label}
								id={field?.id} 
								value={values[field?.name] ?? ''}
								onChange={handleChange}
							/>
							<FormHelperText error>{errors[field.name]}</FormHelperText>
						</>
					)
				}
				{field?.type === "select" && 
					(
						<>
							<TextField
								id={field?.name}
								label={field?.label}
								select
								value={values[field.name] ?? ''}
								onChange={handleChange}
								SelectProps={{
									native: true,
								}}
								>
									<option aria-label="None" value="" />
									{field?.options?.map(option => (
										<option 
											value={option?.value} 
											key={option?.value}
										>
											{option?.label}
										</option>
									))}
							</TextField>
							<FormHelperText error>{errors[field.name]}</FormHelperText>
						</>
					)
				}
				</FormControl>
			))}
			<Button
				color='primary'
				variant='contained'
				fullWidth
				type='submit'
				disabled={loading}
				className={classes.button}
			>
				Send comment
			</Button>
		</form>
	)
}

export default Form;
