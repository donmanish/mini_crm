import { useState } from "react";
import { useParams } from "react-router-dom";

import {
    getAIInsights,
    getCustomer,
    getNotes
} from "../api/api";


function AIInsights(){

    const { id } = useParams();


    const [loading,setLoading] = useState(false);

    const [result,setResult] = useState(null);



    async function generateInsights(){

        try{

            setLoading(true);


            // get customer details

            const customer = await getCustomer(id);



            // get customer notes

            const notes = await getNotes(id);



            const data = {

                customer_name: customer.name,

                company: customer.company,

                status: customer.status,


                notes: notes.map(
                    item => item.note
                )

            };



            console.log(data);



            // send to AI

            const response = await getAIInsights(data);



            setResult(response);


        }

        catch(error){

            console.log(error);

        }


        finally{

            setLoading(false);

        }

    }




    return (

        <div className="container mt-4">


            <h2>
                AI Customer Insights
            </h2>



            <button

            className="btn btn-primary mb-4"

            onClick={generateInsights}

            >

            {
                loading
                ?
                "Analyzing..."
                :
                "Generate AI Insights"
            }


            </button>



            {
                result &&

                <div className="card p-4">


                    <h5>
                        Interest
                    </h5>

                    <p>
                        {result.interest}
                    </p>



                    <h5>
                        Priority
                    </h5>

                    <p>
                        {result.priority}
                    </p>



                    <h5>
                        Budget
                    </h5>

                    <p>
                        {result.budget}
                    </p>



                    <h5>
                        Decision Maker
                    </h5>

                    <p>
                        {result.decision_maker}
                    </p>



                    <h5>
                        Next Step
                    </h5>

                    <p>
                        {result.next_step}
                    </p>



                    <h5>
                        Summary
                    </h5>

                    <p>
                        {result.summary}
                    </p>


                </div>

            }


        </div>

    )

}


export default AIInsights;