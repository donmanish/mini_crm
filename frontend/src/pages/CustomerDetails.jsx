import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getCustomer } from "../api/api";





function CustomerDetails() {



    const { id } = useParams();


    const [customer, setCustomer] = useState(null);




    useEffect(() => {

        getCustomer(id)
            .then(setCustomer);

    }, [id]);





    if (!customer) {

        return (

            <div className="container mt-5 text-center">

                <div className="spinner-border text-primary"></div>

                <p className="mt-3">
                    Loading customer...
                </p>

            </div>

        )

    }






    function statusClass(status) {

        if (status === "Lead")
            return "bg-primary";


        if (status === "Customer")
            return "bg-success";


        if (status === "Prospect")
            return "bg-warning text-dark";


        return "bg-secondary";

    }







    return (

        <div className="container mt-5">


            <div className="row justify-content-center">


                <div className="col-md-8">


                    <div className="card shadow border-0">





                        {/* Header */}


                        <div className="card-header bg-dark text-white p-4">


                            <div className="d-flex align-items-center">


                                <div className="me-3">


                                    <i
                                        className="fa-solid fa-circle-user fa-4x">
                                    </i>


                                </div>




                                <div>


                                    <h2 className="mb-1">

                                        {customer.name}

                                    </h2>


                                    <span

                                        className={
                                            `badge ${statusClass(customer.status)}`
                                        }

                                    >

                                        {customer.status}

                                    </span>


                                </div>


                            </div>


                        </div>







                        {/* Customer Details */}


                        <div className="card-body p-4">


                            <h5 className="mb-4">

                                <i className="fa-solid fa-id-card me-2"></i>

                                Customer Information

                            </h5>





                            <div className="row">


                                <div className="col-md-6 mb-3">


                                    <div className="text-muted">

                                        <i className="fa-solid fa-building me-2"></i>

                                        Company

                                    </div>


                                    <strong>

                                        {customer.company}

                                    </strong>


                                </div>







                                <div className="col-md-6 mb-3">


                                    <div className="text-muted">

                                        <i className="fa-solid fa-envelope me-2"></i>

                                        Email

                                    </div>


                                    <strong>

                                        {customer.email}

                                    </strong>


                                </div>







                                <div className="col-md-6 mb-3">


                                    <div className="text-muted">

                                        <i className="fa-solid fa-phone me-2"></i>

                                        Phone

                                    </div>


                                    <strong>

                                        {customer.phone || "Not available"}

                                    </strong>


                                </div>








                                <div className="col-md-6 mb-3">


                                    <div className="text-muted">


                                        <i className="fa-solid fa-briefcase me-2"></i>

                                        Designation


                                    </div>


                                    <strong>

                                        {customer.designation || "Not available"}

                                    </strong>


                                </div>



                            </div>


                        </div>



                    </div>


                </div>


            </div>


        </div>


    )

}


export default CustomerDetails;