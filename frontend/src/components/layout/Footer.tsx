import { Container, Text } from "@mantine/core";
import classes from "./Footer.module.css";

const data = [
  {
    title: "Company",
    links: [{ label: "About", link: "#" }],
  },
];

const Footer: React.FC = () => {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<"a">
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Text size="xs" c="dimmed" className={classes.description}>
            Not Another Travel Expense Tracker
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          © 2025 Natet. All rights reserved.
        </Text>
      </Container>
    </footer>
  );
};

export default Footer;
