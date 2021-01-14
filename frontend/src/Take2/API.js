import base64 from 'base-64'
import Cookies from 'js-cookie'
const api = 'http://127.0.0.1:8000/API'
const noapi = 'http://127.0.0.1:8000'
const API = {}

API.getServices = () => {
    return new Promise((resolve, reject) => {
        return setTimeout(()=>{
            return resolve([
                {
                    id: 1,
                    name: 'Lab'
                },
                {
                    id: 2,
                    name: 'Radiology'
                }
            ])
        }, 1000)
    })
}

API.getDepartments = () => {
    return fetch(`${api}/hospital`).then(r=>r.json()).then(r=>r.department_set)
}

// API.getDepartments = () => {
//     return new Promise((resolve, reject) => {
//         return setTimeout(()=>{
//             return resolve([
//                 {
//                     id: 1,
//                     name: 'Optical Department',
//                     image: 'optical_department.png',
//                 },
//                 {
//                     id: 2,
//                     name: 'Cardiology',
//                     image: 'cardiology_department.png',
//                 },
//                 {
//                     id: 3,
//                     name: 'Obstetrics and Gynecology Department',
//                     image: 'obgyn_department'
//                 },
//                 {
//                     id: 4,
//                     name: 'Dental Department',
//                     image: 'department'
//                 }
//             ])
//         }, 1000)
//     })
// }

API.getLoginToken = (user, password) => {
    let headers = new Headers();
    headers.set('Content-type', `application/json`)
    return fetch(`${noapi}/login/`, {
        method: 'POST',
        credentials: 'same-origin',
        body: JSON.stringify({
            username: user,
            password: password
        }),
        headers: headers
    }).then((r) => {
        if (r.status !== 200) {
            return {key: null};
        } else {
            return r.json()
        }
    }).then(r=>r.key)
}



// fetch('http://127.0.0.1:8000/API/patient/doctors', {
//   method: 'GET',
// 	credentials: 'same-origin',
// 	headers: new Headers({
// 		'Authorization': 'Token 772835ceae8390f61baa4ab4af8c6ec1d3a8c5ba',
// 		'Content-Type': 'application/json'
// 	})
// })

API.getAppointments = () => {
    let headers = new Headers();
    headers.set('Content-type', `application/json`);
    headers.set('Authorization', 'Token 772835ceae8390f61baa4ab4af8c6ec1d3a8c5ba');
    return fetch(`${api}/patient/appointments`, {
        method: 'GET',
        credentials: 'same-origin',
        headers: headers
    }).then((r) => {
        if (r.status !== 200) {
            return {key: null};
        } else {
            return r.json()
        }
    }).then(r=>r)
}

API.getDepartmentDoctors = (departmentName) => {
    return fetch(`${api}/doctors/${departmentName}`).then(r=>r.json())
}

API.getDepartmentDoctors = (departmentName) => {
    return fetch(`${api}/doctors/${departmentName}`).then(r=>r.json())
}

API.isAuthenticated = (key) => {
    if (key) {
        return fetch(`${api}/user/information/view`, {
        method: 'GET',
            credentials: 'same-origin',
            headers: new Headers({
                'Authorization': `Token ${key}`,
                'Content-Type': 'application/json'
            })
        }).then(r=>r.json()).then(r=>r);
    } else {
        return null;
    }
}

API.getAccountType = (key) => {
    if (key) {
        return fetch(`${api}/user/information/view`, {
        method: 'GET',
            credentials: 'same-origin',
            headers: new Headers({
                'Authorization': `Token ${key}`,
                'Content-Type': 'application/json'
            })
        }).then(r=>r.json()).then(r=>r.account_type);
    } else {
        return null;
    }
}

API.getRooms = (key) => {
    if (key) {
        return fetch(`${api}/hospital/available_rooms`, {
        method: 'GET',
            credentials: 'same-origin',
            headers: new Headers({
                'Authorization': `Token ${key}`,
                'Content-Type': 'application/json'
            })
        }).then(r=>r.json()).then(r=>r);
    } else {
        return null;
    }
}

API.getPatientInformation = (token) => {
    return new Promise((resolve, reject) => {
        return setTimeout(() => {
            return resolve({
                token: token + 1,
                id: 1,
                name: 'Mamdouh',
                email: 'a@b.com',
                dob: new Date(821616193000)
            });
        }, 1000)
    })
}

API.getDoctorsOfPatient = (key) => {
    if (key) {
        return fetch(`${api}/patient/doctors`, {
        method: 'GET',
            credentials: 'same-origin',
            headers: new Headers({
                'Authorization': `Token ${key}`,
                'Content-Type': 'application/json'
            })
        }).then(r=>r.json()).then(r=>r);
    } else {
        return null;
    }
}

// API.getDoctorsOfPatient = (patient) => {
//     return new Promise((resolve, reject) => {
//         return setTimeout(() => {
//             return resolve([
//                 {id: 1, name: 'Mariam'},
//                 {id: 2, name: 'Mamdouh'},
//                 {id: 3, name: 'Maryam'},
//                 {id: 4, name: 'Marwa'}
//             ]);
//         }, 1000)
//     })
// }

API.getProfessionalInformation = (ID) => {
    return new Promise((resolve, reject) => {
        return setTimeout(() => {
            return resolve({
                name: 'A',
                birthdate: new Date(821565951000),
                phonenumber: '012345678910'
            });
        }, 1000);
    })
};

API.getID = ()=>(
    new Promise((resolve, reject)=>{
        return setTimeout(() => {
            resolve(15);
        }, 1000);
    })
);

API.getPatients = (id) => (
    new Promise((resolve, reject)=> {
        return setTimeout(() => {
            resolve(
                {patients: [
                    {id: 1, name: 'Mariam'},
                    {id: 2, name: 'Mamdouh'},
                    {id: 3, name: 'Maryam'},
                    {id: 4, name: 'Marwa'}
                ]}
            )
        }, 1000);
    })
);

export default API;