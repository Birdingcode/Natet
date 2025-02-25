import { Button, Container } from "@mantine/core";
import classes from "./Navbar.module.css";
import { useNavigate } from "react-router";

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <header className={classes.header}>
      <Container className={classes.inner}>
        <div className={classes.logo}></div>
        <Button
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </Button>
      </Container>
    </header>
  );
};

export default Navbar;
