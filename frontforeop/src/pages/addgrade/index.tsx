import {
	Button,
	Card,
	CardTitle,
	Form,
	FormGroup,
	Input,
	Label,
} from "reactstrap";
import s from "./style.module.less";
import { useFormik } from "formik";

type TForm = {
	gradeName: string;
	gradeDescription: string;
};

const AddGradePage: React.FC = () => {
	const formik = useFormik<TForm>({
		initialValues: {
			gradeName: "",
			gradeDescription: "",
		},
		onSubmit: (values) => {
			console.log(values);
		},
	});

	return (
		<Card className={s.cardContainer}>
			<CardTitle className={s.cardTitle}>Add Grade</CardTitle>
			<Form
				onSubmit={formik.handleSubmit}
				style={{ display: "flex", flexDirection: "column" }}
			>
				<FormGroup>
					<Label>Grade Name</Label>
					<Input
						id="gradeName"
						name="gradeName"
						onChange={formik.handleChange}
						value={formik.values.gradeName}
					></Input>
				</FormGroup>
				<FormGroup>
					<Label>Grade Description</Label>
					<Input
						id="gradeDescription"
						type="textarea"
						name="gradeDescription"
						onChange={formik.handleChange}
						value={formik.values.gradeDescription}
					></Input>
				</FormGroup>
				<Button className={s.authButton} type="submit">
					Add Grade
				</Button>
			</Form>
		</Card>
	);
};

export default AddGradePage;
