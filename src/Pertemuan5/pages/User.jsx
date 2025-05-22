import { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import "../assets/tailwind.css";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/table";
import { Link } from "react-router-dom";

export default function User() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.users)); // ambil array user dari data.users
  }, []);

  return (
    <div id="orders-container">
      <PageHeader
        title="User"
        breadcrumb={["User", "Data User"]}
        children={
          <>
            <button
              id="add-button"
              className="bg-biru mr-2 px-4 py-2 rounded-lg text-white"
            >
              <Link to="/formUser"> Add User</Link>
            </button>
          </>
        }
      />
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>No</TableHeader>
            <TableHeader>User ID</TableHeader>
            <TableHeader>Nama</TableHeader>
            <TableHeader>Email</TableHeader>
            <TableHeader>No Handphone</TableHeader>
            <TableHeader>Gender</TableHeader>
            <TableHeader>Image</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((item, index) => (
            <TableRow key={item.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{item.id}</TableCell>
              <TableCell>
                {item.firstName} {item.maidenName} {item.lastName}
              </TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.phone}</TableCell>
              <TableCell>{item.gender}</TableCell>
              <TableCell>
                <img
                  src={item.image}
                  alt={item.firstName}
                  className="rounded-full w-10 h-10"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
