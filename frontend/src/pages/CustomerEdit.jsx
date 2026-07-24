import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import {
    getCustomer,
    updateCustomer
} from "../api/api";


function CustomerEdit(){


    const {id} = useParams();

    const navigate = useNavigate();



    const [form,setForm] = useState({

        name:"",
        email:"",
        phone:"",
        company:"",
        designation:"",
        status:"Lead"

    });





    useEffect(()=>{

        loadCustomer();

    },[]);





    async function loadCustomer(){


        const data = await getCustomer(id);


        setForm({

            name:data.name || "",

            email:data.email || "",

            phone:data.phone || "",

            company:data.company || "",

            designation:data.designation || "",

            status:data.status || "Lead"

        });


    }





    function handleChange(e){


        setForm({

            ...form,

            [e.target.name]:e.target.value

        });


    }






    async function handleSubmit(e){

        e.preventDefault();


        await updateCustomer(
            id,
            form
        );


        navigate(`/customer/${id}`);

    }





    return (

        <div className="container mt-5">


            <div className="row justify-content-center">


                <div className="col-md-8">


                    <div className="card shadow border-0">



                        <div className="card-header bg-primary text-white">


                            <h3 className="mb-0">

                                <i className="fa-solid fa-user-pen me-2"></i>

                                Edit Customer

                            </h3>


                        </div>





                        <div className="card-body p-4">


                            <form onSubmit={handleSubmit}>



                                <div className="mb-3">

                                    <label className="form-label fw-semibold">

                                        <i className="fa-solid fa-user me-2"></i>

                                        Name

                                    </label>


                                    <input

                                    className="form-control"

                                    name="name"

                                    value={form.name}

                                    placeholder="Customer name"

                                    onChange={handleChange}

                                    />

                                </div>






                                <div className="mb-3">


                                    <label className="form-label fw-semibold">

                                        <i className="fa-solid fa-envelope me-2"></i>

                                        Email

                                    </label>


                                    <input

                                    className="form-control"

                                    name="email"

                                    type="email"

                                    value={form.email}

                                    placeholder="Email address"

                                    onChange={handleChange}

                                    />


                                </div>






                                <div className="mb-3">


                                    <label className="form-label fw-semibold">

                                        <i className="fa-solid fa-phone me-2"></i>

                                        Phone

                                    </label>


                                    <input

                                    className="form-control"

                                    name="phone"

                                    value={form.phone}

                                    placeholder="Phone number"

                                    onChange={handleChange}

                                    />


                                </div>






                                <div className="mb-3">


                                    <label className="form-label fw-semibold">

                                        <i className="fa-solid fa-building me-2"></i>

                                        Company

                                    </label>


                                    <input

                                    className="form-control"

                                    name="company"

                                    value={form.company}

                                    placeholder="Company name"

                                    onChange={handleChange}

                                    />


                                </div>







                                <div className="mb-3">


                                    <label className="form-label fw-semibold">

                                        <i className="fa-solid fa-briefcase me-2"></i>

                                        Designation

                                    </label>


                                    <input

                                    className="form-control"

                                    name="designation"

                                    value={form.designation}

                                    placeholder="CTO, Manager, CEO"

                                    onChange={handleChange}

                                    />


                                </div>







                                <div className="mb-4">


                                    <label className="form-label fw-semibold">


                                        <i className="fa-solid fa-chart-line me-2"></i>

                                        Status


                                    </label>



                                    <select

                                    className="form-select"

                                    name="status"

                                    value={form.status}

                                    onChange={handleChange}

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

                                    onClick={()=>navigate(`/customer/${id}`)}

                                    >

                                        <i className="fa-solid fa-arrow-left me-2"></i>

                                        Cancel

                                    </button>





                                    <button

                                    className="btn btn-primary px-4"

                                    >

                                        <i className="fa-solid fa-floppy-disk me-2"></i>

                                        Update Customer

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


export default CustomerEdit;