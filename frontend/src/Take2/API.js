const API = {}

API.getServices = () => {
    return new Promise((resolve, reject) => {
        return setTimeout(()=>{
            return resolve([
                {
                    id: 1,
                    name: 'Test'
                },
                {
                    id: 2,
                    name: 'Test2'
                }
            ])
        }, 1000)
    })
}

API.getDepartments = () => {
    return new Promise((resolve, reject) => {
        return setTimeout(()=>{
            return resolve([
                {
                    id: 1,
                    name: 'Optical Department',
                    image: 'optical_department.png',
                },
                {
                    id: 2,
                    name: 'Cardiology',
                    image: 'cardiology_department.png',
                },
                {
                    id: 3,
                    name: 'Obstetrics and Gynecology Department',
                    image: 'obgyn_department'
                },
                {
                    id: 4,
                    name: 'Dental Department',
                    image: 'department'
                }
            ])
        }, 1000)
    })
}

API.isAuthenticated = (token) => {
    return new Promise((resolve, reject) => {
        return setTimeout(() => {
            return resolve({
                authenticated: token === '1020',
                id: 15,
                account_type: 'doctor'
            });
        }, 1000)
    })
}

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
}

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