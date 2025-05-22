import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";
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
import user from "../../../customer.json";
import { Link } from "react-router-dom";
export default function Customers() {
  return (
    <div id="orders-container">
      <PageHeader title="Customers" breadcrumb={["Customers", "Home Page"]} 
      children={<><button id="add-button" className="bg-biru mr-2 px-4 py-2 rounded-lg text-white" ><Link to="/formCust"> Add Customer</Link></button></>  } />
      <Table>
      <TableHead>
        <TableRow>
          <TableHeader>No</TableHeader>
          <TableHeader>Customer ID</TableHeader>
          <TableHeader>Nama</TableHeader>
          <TableHeader>Email</TableHeader>
          <TableHeader>No Handphone</TableHeader>
          <TableHeader> Loyalty</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
      {
        user.map((item,index) => (
          <TableRow>
          <TableCell>{index+1}</TableCell>
          <TableCell>{item.customer_id}</TableCell>
          <TableCell>{item.customer_name}</TableCell>
          <TableCell>{item.email}</TableCell>
          <TableCell>{item.phone}</TableCell>
          <TableCell>{item.loyalty}</TableCell>
        </TableRow>
        
        ))
      }
       
      </TableBody>
    </Table>
    </div>
  );
}
