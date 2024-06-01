import { FC, useEffect, useState } from "react";
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
} from "@mui/material";
import Fade from "@mui/material/Fade";
import { useGlobalContext } from "@/contexts/GlobalContext";
// import employeesList from "@/data/employees.json";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: { color: string; type: string };
  domain: string;
  ip: string;
  address: {
    address: string;
    city: string;
    coordinates: { lat: number; lng: number };
    postalCode: string;
    state: string;
  };
  macAddress: string;
  university: string;
  bank: { cardExpire: string; cardNumber: string; cardType: string; currency: string; iban: string };
  company: {
    address: {
      address: string;
      city: string;
      coordinates: { lat: number; lng: number };
      postalCode: string;
      state: string;
    };
    department: string;
    name: string;
    title: string;
  };
  ein: string;
  ssn: string;
  userAgent: string;
}

const Employees: FC = () => {
  const [employeesList, setEmployeesList] = useState<User[]>([]);
  const { employeesToShow } = useGlobalContext();
  const [loading, setLoading] = useState<boolean>(true);

  // useEffect(() => {
  //   fetch(`https://dummyjson.com/users?limit=${employeesToShow.toString()}&skip=0`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setEmployeesList(data.users);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching users:", error);
  //     });
  // }, [employeesToShow]);

  const fetchEmployees = async () => {
    setLoading(true);
    await fetch(
      `https://dummyjson.com/users?limit=${employeesToShow.toString()}&skip=${employeesList.length.toString()}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setEmployeesList((prevEmployees) => [...prevEmployees, ...data.users]);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <Container component="section" className="employees__section">
      <Typography variant="h2" sx={{ marginBottom: "70px" }}>
        Employees
      </Typography>
      <List>
        {!loading
          ? employeesList.map((item, index) => (
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
                      <Link href={`mailto:${item.email}`} color="primary" underline="none">
                        {item.email}
                      </Link>

                      <Link href={`tel:${item.phone.replace(/[\s()]/g, "")}`} color="primary" underline="none">
                        {item.phone}
                      </Link>
                    </Container>
                  </CardContent>
                </Card>
              </ListItem>
            ))
          : Array.from({ length: employeesList.length + employeesToShow }).map((_, index) => (
              <Skeleton variant="rounded" key={index} height={250} />
            ))}
      </List>

      {!loading ? (
        <Button
          variant="contained"
          className="more-button"
          onClick={() => {
            // setEmployeesToShow(employeesToShow + 6);
            fetchEmployees();
          }}
        >
          Show more
        </Button>
      ) : (
        <CircularProgress sx={{ margin: "auto", display: "block", color: "blue" }} />
      )}
    </Container>
  );
};

export default Employees;
