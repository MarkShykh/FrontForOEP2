import { Button, Card, CardTitle, Form, FormGroup, Input, Label } from "reactstrap";
import s from './style.module.less'
import { useFormik } from "formik";

type TForm = {
    email:string;
    password:string;
}

const LoginPage: React.FC = () => {

    const formik = useFormik<TForm>({
        initialValues: {
            email:'',
            password:''
        },
        onSubmit: values => {
            console.log(values);
          },
    }) 

  return (
    <Card className={s.cardContainer}>
      <CardTitle className={s.cardTitle}>Login</CardTitle>
      <Form onSubmit={formik.handleSubmit} style={{display:'flex',flexDirection:'column'}}>
        <FormGroup>
          <Label>Email</Label>
          <Input id="email" type="email" name="email" onChange={formik.handleChange} value={formik.values.email}></Input>
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input id="password" type="password" name="password" onChange={formik.handleChange} value={formik.values.password}></Input>
        </FormGroup>
        <Button className={s.authButton} type="submit">Auth</Button>
      </Form>
    </Card>
  );
};

export default LoginPage;
