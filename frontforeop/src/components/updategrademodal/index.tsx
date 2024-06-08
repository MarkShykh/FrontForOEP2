import {
	Button,
	Card,
	CardTitle,
	Form,
	FormGroup,
	Input,
	Label,
	Modal,
} from "reactstrap";
import s from "./style.module.less";
import { useFormik } from "formik";

type TForm = {
	gradeName: string;
	gradeDescription: string;
};

type TProps = {
	values: TForm;
	isOpen: boolean;
	onClose: () => void;
};

const UpgradeGradeModal: React.FC<TProps> = (props) => {
	const formik = useFormik<TForm>({
		initialValues: props.values,
		onSubmit: (values) => {
			console.log(values);
		},
	});

	return (
		<Modal isOpen={props.isOpen} toggle={() => props.onClose()}>
			<Card className={s.cardContainer}>
				<CardTitle className={s.cardTitle}>Add Grade</CardTitle>
				<Form
					onSubmit={formik.handleSubmit}
					style={{ display: "flex", flexDirection: "column" }}
				>
					<FormGroup>
						<Label>Update Grade</Label>
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
						Update Grade
					</Button>
				</Form>
			</Card>
		</Modal>
	);
};

export default UpgradeGradeModal;
