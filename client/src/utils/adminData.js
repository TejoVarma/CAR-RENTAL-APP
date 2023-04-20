const URL = "http://localhost:4000";

export function getCars(){
    return fetch(`${URL}/admin/cars`)
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