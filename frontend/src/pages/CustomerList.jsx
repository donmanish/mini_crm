import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
    getCustomers,
    deleteCustomer
} from "../api/api";


function CustomerList() {

    const [customers, setCustomers] = useState([]);


    useEffect(() => {
        loadCustomers();
    }, []);



    async function loadCustomers() {

        const data = await getCustomers();

        setCustomers(data);

    }



    async function handleDelete(id) {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this customer?"
        );

        if (!confirmDelete) return;

        await deleteCustomer(id);

        loadCustomers();

    }



    function getStatusClass(status) {

        if (status === "Lead") {
            return "bg-primary";
        }

        if (status === "Customer") {
            return "bg-success";
        }

        if (status === "Prospect") {
            return "bg-warning text-dark";
        }

        return "bg-secondary";

    }



    return (

        <div className="container mt-5">

            {/* Header */}

            <div className="d-flex justify-content-between align-items-center mb-4">

                <div>

                    <h2 className="fw-bold">

                        <i className="fa-solid fa-users me-2"></i>

                        Customers

                    </h2>

                    <p className="text-muted">
                        Manage sales leads and customer relationships
                    </p>

                </div>

                <Link
                    to="/customer/add"
                    className="btn btn-success"
                >

                    <i className="fa-solid fa-user-plus me-2"></i>

                    Add Customer

                </Link>

            </div>



            {/* Table */}

            <div className="card shadow border-0">

                <div className="card-body">

                    <div className="table-responsive">

                        <table className="table table-hover align-middle">

                            <thead className="table-dark">

                                <tr>

                                    <th>Name</th>

                                    <th>Company</th>

                                    <th>Status</th>

                                    <th width="360">
                                        Actions
                                    </th>

                                </tr>

                            </thead>



                            <tbody>

                                {

                                    customers.length === 0 ?

                                        <tr>

                                            <td
                                                colSpan="4"
                                                className="text-center py-5 text-muted"
                                            >

                                                No customers found

                                            </td>

                                        </tr>

                                        :

                                        customers.map(customer => (

                                            <tr key={customer.id}>

                                                <td>

                                                    <div className="fw-semibold">

                                                        <i className="fa-solid fa-user text-secondary me-2"></i>

                                                        {customer.name}

                                                    </div>

                                                </td>



                                                <td>

                                                    <i className="fa-solid fa-building text-secondary me-2"></i>

                                                    {customer.company}

                                                </td>



                                                <td>

                                                    <span
                                                        className={`badge ${getStatusClass(customer.status)}`}
                                                    >

                                                        {customer.status}

                                                    </span>

                                                </td>



                                                <td>

                                                    <div className="d-flex flex-wrap gap-2">

                                                        <Link
                                                            to={`/customer/${customer.id}`}
                                                            className="btn btn-outline-primary btn-sm"
                                                            title="View"
                                                        >

                                                            <i className="fa-solid fa-eye"></i>

                                                        </Link>



                                                        <Link
                                                            to={`/customer/edit/${customer.id}`}
                                                            className="btn btn-outline-warning btn-sm"
                                                            title="Edit"
                                                        >

                                                            <i className="fa-solid fa-pen"></i>

                                                        </Link>



                                                        <Link
                                                            to={`/customer/${customer.id}/notes`}
                                                            className="btn btn-outline-info btn-sm"
                                                            title="Notes"
                                                        >

                                                            <i className="fa-solid fa-note-sticky"></i>

                                                        </Link>



                                                        <Link
                                                            to={`/customer/${customer.id}/ai`}
                                                            className="btn btn-outline-success btn-sm"
                                                            title="AI Insights"
                                                        >

                                                            <i className="fa-solid fa-robot"></i>

                                                        </Link>



                                                        <Link
                                                            to={`/customer/${customer.id}/timeline`}
                                                            className="btn btn-outline-dark btn-sm"
                                                            title="Timeline"
                                                        >

                                                            <i className="fa-solid fa-clock-rotate-left"></i>

                                                        </Link>



                                                        <button
                                                            className="btn btn-outline-danger btn-sm"
                                                            title="Delete"
                                                            onClick={() => handleDelete(customer.id)}
                                                        >

                                                            <i className="fa-solid fa-trash"></i>

                                                        </button>

                                                    </div>

                                                </td>

                                            </tr>

                                        ))

                                }

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default CustomerList;