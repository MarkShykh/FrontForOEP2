import {
	Collapse,
	Nav,
	NavItem,
	NavLink,
	Navbar,
	NavbarBrand,
} from "reactstrap";
import logo from "../../assets/logo.png";
import s from "./styles.module.less";

const MyNavBar: React.FC = (args) => {
	return (
		<div className={s.container}>
			<Navbar {...args} className={s.navbar} expand={true}>
				<NavbarBrand href="/">
					<img
						src={logo}
						style={{
							height: 80,
							width: 80,
						}}
					/>
					Online Exam Portal
				</NavbarBrand>
				<Collapse isOpen={true} navbar>
					<Nav className="me-auto" navbar>
						<NavItem>
							<NavLink href="/components/">About Us</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/components/">Contact Us</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/addgrade">Add Grade</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/showgrades">View Grades</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/components/">Add Course</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/components/">View Courses</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/components/">Register Teacher</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/components/">All Exams</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/components/">Exam Results</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/components/">View Teachers</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/components/">View Students</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/components/">Logout</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
};

export default MyNavBar;
