const BASE_URL = import.meta.env.VITE_API_URL;


// ================= CUSTOMER APIs =================


// GET all customers
export async function getCustomers(){

    const response = await fetch(
        `${BASE_URL}/customers`
    );

    return response.json();
}



// GET single customer
export async function getCustomer(id){

    const response = await fetch(
        `${BASE_URL}/customer/${id}`
    );

    return response.json();
}



// CREATE customer
export async function createCustomer(data){

    const response = await fetch(
        `${BASE_URL}/customers`,
        {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        }
    );

    return response.json();
}



// UPDATE customer
export async function updateCustomer(id,data){

    const response = await fetch(
        `${BASE_URL}/customer/${id}`,
        {
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        }
    );

    return response.json();
}



// DELETE customer
export async function deleteCustomer(id){

    const response = await fetch(
        `${BASE_URL}/customer/${id}`,
        {
            method:"DELETE"
        }
    );

    return response.json();
}





// ================= NOTES APIs =================


// CREATE note
// POST /notes

export async function createNote(data){

    const response = await fetch(
        `${BASE_URL}/notes`,
        {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        }
    );

    return response.json();
}



// GET customer notes
// GET /notes/{customer_id}

export async function getNotes(customerId){

    const response = await fetch(
        `${BASE_URL}/notes/${customerId}`
    );

    return response.json();
}





// ================= AI APIs =================


// POST /ai/customer-insights

export async function getAIInsights(data){

    const response = await fetch(
        `${BASE_URL}/ai/customer-insights-test`,
        {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        }
    );


    return response.json();

}

export async function getTimeline(customerId){

    const response = await fetch(
        `${BASE_URL}/timeline/${customerId}`
    );

    return response.json();

}