import { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Container } from "@mantine/core";

interface Props {
  children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Container
      px={0}
      style={{ minHeight: "100vh", flexDirection: "column", display: "flex" }}
      fluid
    >
      <Navbar />
      <main style={{ flexGrow: 1 }}>{children}</main>
      <Footer />
    </Container>
  );
};

export default Layout;
