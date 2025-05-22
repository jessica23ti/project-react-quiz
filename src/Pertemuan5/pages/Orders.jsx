import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";
import PageHeader from "../components/PageHeader";
import "../assets/tailwind.css";
import React from "react";
import order from "../../../order.json";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/table";
import { Link } from "react-router-dom";
export default function Orders() {
  return (
    <div id="orders-container" className="rounded-none">
      <PageHeader
        title="Orders"
        breadcrumb={["Orders", "Home Page"]}
        children={
          <>
            <button
              id="add-button"
              className="bg-biru mr-2 px-4 py-2 rounded-lg text-white"
            >
              <Link to="/formOrders"> Add Orders</Link>
            </button>
          </>
        }
      />
      <Table className="rounded-none" id="table-orders">
        <TableHead>
          <TableRow>
            <TableHeader>No</TableHeader>
            <TableHeader>Order ID</TableHeader>
            <TableHeader>Customer Name</TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader>Total Harga</TableHeader>
            <TableHeader> Order Date</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {order.map((item, index) => (
            <TableRow>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{item.order_id}</TableCell>
              <TableCell>{item.customer_name}</TableCell>
              <TableCell>{item.status}</TableCell>
              <TableCell>{item.total_price}</TableCell>
              <TableCell>{item.order_date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex justify-between items-center bg-white px-4 sm:px-6 py-3 border-gray-200 border-t">
        <div className="sm:hidden flex flex-1 justify-between">
          <a
            href="#"
            className="inline-flex relative items-center bg-white hover:bg-gray-50 px-4 py-2 border border-gray-300 rounded-md font-medium text-gray-700 text-sm"
          >
            Previous
          </a>
          <a
            href="#"
            class="inline-flex relative items-center bg-white hover:bg-gray-50 ml-3 px-4 py-2 border border-gray-300 rounded-md font-medium text-gray-700 text-sm"
          >
            Next
          </a>
        </div>
        <div className="hidden sm:flex sm:flex-1 sm:justify-between sm:items-center">
          <div>
            <p className="text-gray-700 text-sm">
              Showing &nbsp;
              <span className="font-medium">1</span>&nbsp; to &nbsp;
              <span className="font-medium">10</span> &nbsp; of &nbsp;
              <span className="font-medium">97</span> &nbsp; results
            </p>
          </div>
          <div>
            <nav
              className="inline-flex isolate -space-x-px shadow-xs rounded-md"
              aria-label="Pagination"
            >
              <a
                href="table-orders"
                className="inline-flex focus:z-20 relative items-center hover:bg-gray-50 px-2 py-2 rounded-l-md focus:outline-offset-0 ring-1 ring-gray-300 ring-inset text-gray-400"
              >
                <span className="sr-only">Previous</span>
                <svg
                  className="size-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
              {/* <!-- Current: "z-10 bg-indigo-600 text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" --> */}
              <a
                href="#"
                aria-current="page"
                className="inline-flex z-10 focus:z-20 relative items-center bg-indigo-600 px-4 py-2 focus-visible:outline-2 focus-visible:outline-indigo-600 focus-visible:outline-offset-2 font-semibold text-white text-sm"
              >
                1
              </a>
              <a
                href="#"
                className="inline-flex focus:z-20 relative items-center hover:bg-gray-50 px-4 py-2 focus:outline-offset-0 ring-1 ring-gray-300 ring-inset font-semibold text-gray-900 text-sm"
              >
                2
              </a>
              <a
                href="#"
                className="hidden md:inline-flex focus:z-20 relative items-center hover:bg-gray-50 px-4 py-2 focus:outline-offset-0 ring-1 ring-gray-300 ring-inset font-semibold text-gray-900 text-sm"
              >
                3
              </a>
              <span className="inline-flex relative items-center px-4 py-2 focus:outline-offset-0 ring-1 ring-gray-300 ring-inset font-semibold text-gray-700 text-sm">
                ...
              </span>
              <a
                href="#"
                className="hidden md:inline-flex focus:z-20 relative items-center hover:bg-gray-50 px-4 py-2 focus:outline-offset-0 ring-1 ring-gray-300 ring-inset font-semibold text-gray-900 text-sm"
              >
                8
              </a>
              <a
                href="#"
                className="inline-flex focus:z-20 relative items-center hover:bg-gray-50 px-4 py-2 focus:outline-offset-0 ring-1 ring-gray-300 ring-inset font-semibold text-gray-900 text-sm"
              >
                9
              </a>
              <a
                href="#"
                className="inline-flex focus:z-20 relative items-center hover:bg-gray-50 px-4 py-2 focus:outline-offset-0 ring-1 ring-gray-300 ring-inset font-semibold text-gray-900 text-sm"
              >
                10
              </a>
              <a
                href="#"
                className="inline-flex focus:z-20 relative items-center hover:bg-gray-50 px-2 py-2 rounded-r-md focus:outline-offset-0 ring-1 ring-gray-300 ring-inset text-gray-400"
              >
                <span className="sr-only">Next</span>
                <svg
                  className="size-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
