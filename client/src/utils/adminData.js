const URL = "http://localhost:4000";

export async function getCars(){
    return await fetch(`${URL}/admin/cars`,{
        headers : {
            "authorization" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ0MzdjNWVjM2Q5NTZlN2YzYjI3MzVlIiwiZW1haWwiOiJ0ZWpvQGdtYWlsLmNvbSJ9LCJpYXQiOjE2ODIxNDQ2NDV9.vJGVqJz9cQZqpoYmhhFCEu08d-Cq8w4Vt0ZDwEvw3Kg"
        }
    })
    .then(res=>res.json())
    .catch(err=>alert(err.message))
};
export async function getCarById(id){
    return await fetch(`${URL}/admin/cars/${id}`,{
        headers : {
            "authorization" : "JWT"
        }
    })
    .then(res=>res.json())
    .catch(err=>alert(err.message))
};

export async function addNewCar(car) {
    return await fetch(`${URL}/admin/newcar`,{
        method : "POST",
        headers : {
            "authorization" : "JWT"
        },
        body : car
    })
    .then(res => res.json())
    .catch(err => alert(err.message));
}

export async function editCar(car,id){
    return await fetch(`${URL}/admin/car/${id}`, {
        method : "PUT",
        headers : {
            "authorization" : "JWT"
        },
        body : car
    })
    .then(res=>res.json())
    .catch(err => alert(err.message))
}
export async function deleteCar(id){
    return await fetch(`${URL}/admin/car/${id}`, {
        method : "DELETE",
        headers : {
            "authorization" : "JWT"
        },
    })
    .then(res=>res.json())
    .catch(err => alert(err.message))
}