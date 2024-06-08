import { Button, Card, CardBody, CardHeader, Table } from "reactstrap";
import s from "./style.module.less";
import { useState } from "react";
import { UpdateGradeModal } from "../../components";

type TData = {
	id: string;
	gradeName: string;
	gradeDescription: string;
};

const dummyData: Array<TData> = [
	{ id: "1", gradeName: "B.E 1st Year", gradeDescription: "B.E 1st Year" },
	{ id: "2", gradeName: "B.E 2st Year", gradeDescription: "B.E 2st Year" },
	{ id: "3", gradeName: "B.E 3st Year", gradeDescription: "B.E 3st Year" },
];

const ShowGrades: React.FC = () => {
	const [upgradeModalOpen, setUpgradeModalOpen] = useState<boolean>(false);
	const [selectedData, setSelectedData] = useState<Omit<TData, "id">>({
		gradeDescription: "",
		gradeName: "",
	});

	return (
		<>
			<Card className={s.cardContainer}>
				<CardHeader className={s.cardTitle}>All Grades</CardHeader>
				<CardBody>
					<Table>
						<thead>
							<tr className={s.tableHeader}>
								<th>Grade Id</th>
								<th>Grade Name</th>
								<th>Description</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							{dummyData.map((data) => {
								return (
									<tr>
										<th scope="row">{data.id}</th>
										<td>{data.gradeName}</td>
										<td>{data.gradeDescription}</td>
										<td className={s.buttonColumn}>
											<Button
												onClick={() => {
													setSelectedData(data);
													setUpgradeModalOpen(true);
												}}
											>
												Update
											</Button>
											<Button>Delete</Button>
											<Button>Courses</Button>
										</td>
									</tr>
								);
							})}
						</tbody>
					</Table>
				</CardBody>
			</Card>
			{upgradeModalOpen && (
				<UpdateGradeModal
					isOpen={upgradeModalOpen}
					onClose={() => setUpgradeModalOpen(false)}
					values={selectedData}
				/>
			)}
		</>
	);
};

export default ShowGrades;
