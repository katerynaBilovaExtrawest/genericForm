import { useState } from 'react';
import { 
	Grid, 
	Typography 
} from '@material-ui/core';
import Form from './components/Form';
import { formStructure, validationSchema } from './data/fields';


function App() {
	const [loading, setLoading] = useState(false);

	const onSubmit = values => {
		console.log(values);
		setLoading(true)
		setTimeout(() => {setLoading(false)}, 1000)
	}

	return (
		<Grid container justify="center">
			<Grid item xs={12} md={6}>

				<Typography variant="h4">Comment Form</Typography>
			
				<Form 
					onSubmit={onSubmit}
					validationSchema={validationSchema}
					formStructure={formStructure}
					loading={loading}
				/>
			</Grid>
		</Grid>

	);
}

export default App;
