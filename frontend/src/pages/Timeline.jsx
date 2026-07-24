import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getTimeline } from "../api/api";


function Timeline(){


    const {id} = useParams();


    const [events,setEvents] = useState([]);




    useEffect(()=>{

        loadTimeline();

    },[]);




    async function loadTimeline(){


        const data = await getTimeline(id);


        setEvents(data);


    }





    return (

        <div className="container mt-5">


            <div className="card shadow border-0">


                <div className="card-header bg-dark text-white">


                    <h3>

                        <i className="fa-solid fa-clock me-2"></i>

                        Customer Timeline

                    </h3>


                </div>





                <div className="card-body">


                {
                    events.length === 0 ?


                    (

                        <p className="text-muted">

                            No activity found

                        </p>

                    )


                    :



                    <div className="timeline">


                    {
                        events.map((item,index)=>(


                            <div

                            key={item.id || index}

                            className="border-start border-3 ps-4 mb-4"


                            >


                                <h6 className="fw-bold">


                                    <i className="fa-solid fa-circle-dot me-2 text-primary"></i>


                                    {item.event}


                                </h6>




                                <p className="text-muted mb-0">

                                    {new Date(
                                        item.created_at
                                    ).toLocaleString()}

                                </p>



                            </div>


                        ))
                    }


                    </div>


                }



                </div>



            </div>


        </div>

    )

}


export default Timeline;