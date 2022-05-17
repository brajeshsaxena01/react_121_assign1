import { useState } from "react";
import { ContactCard } from "./ContactCard";

const initialState = [
  {
    id: 1,
    name: "Brajesh",
    email: "braj@abc",
    phone: 9628596232
  },
  {
    id: 2,
    name: "Aarav",
    email: "aarav@abc",
    phone: 1234596232
  },
  {
    id: 3,
    name: "ravi",
    email: "ravi@abc",
    phone: 98524596232
  },
  {
    id: 4,
    name: "shivam",
    email: "shivam@abc",
    phone: 6284596232
  }
];
export const ContactList = () => {
  const [data, setData] = useState(initialState);
  return (
    <div>
      {data.map((item) => (
        <ContactCard
          key={item.id}
          name={item.name}
          email={item.email}
          phone={item.phone}
        />
      ))}
    </div>
  );
};
