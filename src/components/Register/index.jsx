import { AntTabs, Container } from "./styled";
import SignIn from "../SignIn";
import SignUp from "../SignUp";

export const Register = () => {
  return (
    <Container>
      <AntTabs
        defaultActiveKey="1"
        items={[
          {
            label: `Sign in`,
            key: "1",
            children: <SignIn />,
          },

          {
            label: `Sign up`,
            key: "2",
            children: <SignUp />,
          },
        ]}
      />
    </Container>
  );
};

export default Register;
