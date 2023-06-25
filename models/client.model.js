//what interacts with the db in clients 

const getAll = () => {
    return db.query('SELECT * FROM TravelAgency.client ');
}; 
const getById = (clientId) => {
    return db.query(`SELECT * FROM TravelAgency.client WHERE id = ?`, [clientId]);
    
}; 

const create = ({name,lastname,address,phone,dob,email,dni}) => {
    return db.query('INSERT INTO TravelAgency.client(name,lastname,address,phone,dob,email,dni)VALUES(?,?,?,?,?,?,?)', [name, lastname, address, phone, dob, email, dni])
}

module.exports = { getAll, getById, create }