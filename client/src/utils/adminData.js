const URL = "http://localhost:4000";

export function getCars(){
    return fetch(`${URL}/admin/cars`)
    .then(res=>res.json())
    .catch(err=>alert(err.message))
};
export function getCarById(id){
    return fetch(`${URL}/admin/cars/${id}`)
    .then(res=>res.json())
    .catch(err=>alert(err.message))
};

export function addNewCar(car) {
    return fetch(`${URL}/admin/newcar`,{
        method : "POST",
        body : car
    })
    .then(res => res.json())
    .catch(err => alert(err.message));
}

export function editCar(car,id){
    return fetch(`${URL}/admin/car/${id}`, {
        method : "PUT",
        body : car
    })
    .then(res=>res.json())
    .catch(err => alert(err.message))
}
export function deleteCar(id){
    return fetch(`${URL}/admin/car/${id}`, {
        method : "DELETE"
    })
    .then(res=>res.json())
    .catch(err => alert(err.message))
}