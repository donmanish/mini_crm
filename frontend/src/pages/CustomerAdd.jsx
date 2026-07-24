import { useState } from "react";
import { createCustomer } from "../api/api";
import { useNavigate } from "react-router-dom";


function CustomerAdd() {


    const navigate = useNavigate();


    const [form,setForm] = useState({

        name:"",
        email:"",
        phone:"",
        company:"",
        designation:"",
        status:"Lead"

    });



    function change(e){

        setForm({

            ...form,

            [e.target.name]:e.target.value

        });

    }



    async function submit(e){

        e.preventDefault();


        await createCustomer(form);


        navigate("/customers");

    }





    return (

        <div className="container mt-5">


            <div className="row justify-content-center">


                <div className="col-md-8">


                    <div className="card shadow border-0">


                        <div className="card-header bg-success text-white">


                            <h3 className="mb-0">

                                <i className="fa-solid fa-user-plus me-2"></i>

                                Add New Customer

                            </h3>


                        </div>





                        <div className="card-body p-4">



                            <form onSubmit={submit}>


                                {/* Name */}

                                <div className="mb-3">

                                    <label className="form-label fw-semibold">

                                        <i className="fa-solid fa-user me-2"></i>

                                        Customer Name

                                    </label>


                                    <input

                                    type="text"

                                    name="name"

                                    className="form-control"

                                    placeholder="Enter customer name"

                                    value={form.name}

                                    onChange={change}

                                    required

                                    />

                                </div>





                                {/* Email */}


                                <div className="mb-3">


                                    <label className="form-label fw-semibold">

                                        <i className="fa-solid fa-envelope me-2"></i>

                                        Email

                                    </label>



                                    <input

                                    type="email"

                                    name="email"

                                    className="form-control"

                                    placeholder="Enter email"

                                    value={form.email}

                                    onChange={change}

                                    />

                                </div>





                                {/* Phone */}


                                <div className="mb-3">


                                    <label className="form-label fw-semibold">

                                        <i className="fa-solid fa-phone me-2"></i>

                                        Phone

                                    </label>


                                    <input

                                    type="text"

                                    name="phone"

                                    className="form-control"

                                    placeholder="Enter phone number"

                                    value={form.phone}

                                    onChange={change}

                                    />

                                </div>





                                {/* Company */}


                                <div className="mb-3">


                                    <label className="form-label fw-semibold">

                                        <i className="fa-solid fa-building me-2"></i>

                                        Company

                                    </label>


                                    <input

                                    type="text"

                                    name="company"

                                    className="form-control"

                                    placeholder="Company name"

                                    value={form.company}

                                    onChange={change}

                                    />

                                </div>





                                {/* Designation */}


                                <div className="mb-3">


                                    <label className="form-label fw-semibold">

                                        <i className="fa-solid fa-briefcase me-2"></i>

                                        Designation

                                    </label>


                                    <input

                                    type="text"

                                    name="designation"

                                    className="form-control"

                                    placeholder="CEO, Manager, CTO..."

                                    value={form.designation}

                                    onChange={change}

                                    />

                                </div>





                                {/* Status */}


                                <div className="mb-4">


                                    <label className="form-label fw-semibold">

                                        <i className="fa-solid fa-chart-line me-2"></i>

                                        Status

                                    </label>



                                    <select

                                    name="status"

                                    className="form-select"

                                    value={form.status}

                                    onChange={change}

                                    >


                                        <option value="Lead">
                                            Lead
                                        </option>


                                        <option value="Prospect">
                                            Prospect
                                        </option>


                                        <option value="Customer">
                                            Customer
                                        </option>


                                    </select>


                                </div>





                                <div className="d-flex justify-content-between">


                                    <button

                                    type="button"

                                    className="btn btn-outline-secondary"

                                    onClick={()=>navigate("/customers")}

                                    >

                                        <i className="fa-solid fa-arrow-left me-2"></i>

                                        Cancel

                                    </button>





                                    <button

                                    className="btn btn-success px-4"

                                    >

                                        <i className="fa-solid fa-save me-2"></i>

                                        Save Customer

                                    </button>


                                </div>




                            </form>


                        </div>


                    </div>


                </div>


            </div>


        </div>

    )

}


export default CustomerAdd;