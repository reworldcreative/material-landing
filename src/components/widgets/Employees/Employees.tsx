import { FC, useEffect } from "react";
import {
  Card,
  CardContent,
  Avatar,
  Container,
  List,
  ListItem,
  Typography,
  Link,
  Button,
  Tooltip,
  Skeleton,
  CircularProgress,
  useTheme,
} from "@mui/material";
import Fade from "@mui/material/Fade";
import { useGlobalContext } from "@/contexts/GlobalContext";
// import employeesList from "@/data/employees.json";

const Employees: FC = () => {
  const theme = useTheme();
  const { employeesToShow, employeesList, fetchEmployees, loading } = useGlobalContext();

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <Container component="section" className="employees__section" id="Users">
      <Typography variant="h2" sx={{ marginBottom: "70px" }}>
        Employees
      </Typography>
      <List>
        {employeesList &&
          employeesList.slice(0, Math.floor(employeesList.length / 3) * 3).map((item, index) => (
            <ListItem key={index}>
              <Card>
                <CardContent>
                  <Avatar src={item.image} alt="avatar" />
                  <Tooltip
                    title={`${item.firstName} ${item.lastName}`}
                    TransitionComponent={Fade}
                    TransitionProps={{ timeout: 700 }}
                  >
                    <Typography variant="subtitle1" component="p" color="primary">
                      {item.firstName} {item.lastName}
                    </Typography>
                  </Tooltip>
                  <Container component="div" className="employee__container">
                    <Tooltip
                      title={`${item.company.name} ${item.company.title}`}
                      TransitionComponent={Fade}
                      TransitionProps={{ timeout: 700 }}
                    >
                      <Typography variant="subtitle1" component="p" color="primary">
                        {item.company.name} {item.company.title}
                      </Typography>
                    </Tooltip>
                    <Link href={`mailto:${item.email}`} color="primary" underline="none" sx={{ display: "block" }}>
                      {item.email}
                    </Link>

                    <Link
                      href={`tel:${item.phone.replace(/[\s()]/g, "")}`}
                      color="primary"
                      underline="none"
                      sx={{ display: "block" }}
                    >
                      {item.phone}
                    </Link>
                  </Container>
                </CardContent>
              </Card>
            </ListItem>
          ))}
        {loading &&
          Array.from({ length: employeesToShow }).map((_, index) => (
            <Skeleton variant="rounded" key={index} height={250} />
          ))}
      </List>

      {!loading ? (
        <Button
          variant="contained"
          className="more-button"
          onClick={() => {
            fetchEmployees();
          }}
        >
          Show more
        </Button>
      ) : (
        <CircularProgress sx={{ margin: "auto", display: "block", color: theme.palette.accent.main }} />
      )}
    </Container>
  );
};

export default Employees;
