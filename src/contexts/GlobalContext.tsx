import { FC, createContext, useState, useContext, ReactNode, useCallback, useEffect } from "react";

export interface User {
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

export const newUser: User = {
  id: 1,
  firstName: "1234",
  lastName: "5544545",
  maidenName: "Smith",
  age: 30,
  gender: "male",
  email: "john.doe@example.com",
  phone: "+1234567890",
  birthDate: "1993-01-01",
  image: "https://example.com/avatar.jpg",
  address: {
    address: "123 Main St",
    city: "Anytown",
    coordinates: { lat: 40.7128, lng: -74.006 },
    postalCode: "12345",
    state: "NY",
  },
  macAddress: "00:1B:44:11:3A:B7",
  university: "Example University",
  bank: {
    cardExpire: "12/25",
    cardNumber: "1234-5678-9876-5432",
    cardType: "Visa",
    currency: "USD",
    iban: "US29NWBK60161331926819",
  },
  company: {
    address: {
      address: "456 Corporate Blvd",
      city: "Business City",
      coordinates: { lat: 37.7749, lng: -122.4194 },
      postalCode: "67890",
      state: "CA",
    },
    department: "Engineering",
    name: "Tech Corp",
    title: "Software Engineer",
  },
  ein: "12-3456789",
  ssn: "123-45-6789",
  userAgent:
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
  username: "johndoe",
  password: "password123",
  bloodGroup: "A+",
  height: 180,
  weight: 75,
  eyeColor: "brown",
  hair: { color: "black", type: "straight" },
  domain: "example.com",
  ip: "192.168.1.1",
};

interface GlobalContextType {
  theme: "light" | "dark";
  toggleTheme: () => void;
  setTheme: (theme: "light" | "dark") => void;
  employeesToShow: number;
  setEmployeesToShow: (employeesNumber: number) => void;
  employeesList: User[];
  setEmployeesList: (employeesList: User[]) => void;
  addEmployees: (data: User) => void;
  fetchEmployees: () => void;
  loading: boolean;
  openPopup: boolean;
  showPopup: () => void;
}

export const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [employeesToShow, setEmployeesToShow] = useState<number>(6);
  const [employeesList, setEmployeesList] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [openPopup, setOpenPopup] = useState<boolean>(false);

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }, []);

  const showPopup = useCallback(() => {
    setOpenPopup(true);
    setTimeout(() => {
      setOpenPopup(false);
    }, 3000);
  }, []);

  const addEmployees = useCallback(async (data: User) => {
    setEmployeesList((prevEmployees) => [data, ...prevEmployees]);
    try {
      const response = await fetch("http://dummyjson.com/users/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: data.firstName,
          lastName: data.lastName,
          image: data.image,
          email: data.email,
          phone: data.phone,
          company: { ...newUser.company, title: data.company.title },
        }),
      });
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error("Error adding employee:", error);
    }
  }, []);

  const fetchEmployees = useCallback(() => {
    const worker = new Worker(new URL("./dataWorker.ts", import.meta.url), {
      type: "module",
    });

    setLoading(true);

    worker.onmessage = (event) => {
      const { success, data, error } = event.data;
      if (success) {
        setEmployeesList((prevEmployees) => [...prevEmployees, ...data]);
      } else {
        console.error("Error fetching users:", error);
      }
      setLoading(false);
      worker.terminate();
    };

    const url = `https://dummyjson.com/users?limit=${employeesToShow.toString()}&skip=${employeesList.length.toString()}`;
    worker.postMessage({ url });
  }, [employeesToShow, employeesList]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        theme,
        toggleTheme,
        setTheme,
        employeesToShow,
        setEmployeesToShow,
        employeesList,
        setEmployeesList,
        addEmployees,
        fetchEmployees,
        loading,
        openPopup,
        showPopup,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = (): GlobalContextType => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("GlobalContext is not found");
  }
  return context;
};
