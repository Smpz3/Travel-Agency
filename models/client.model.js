//what interacts with the db in clients 
const clientDB = 'TravelAgency.client'; 

const getAll = () => {
    return db.query(`SELECT * FROM ${clientDB}`);
}; 
const getById = (clientId) => {
    return db.query(`SELECT * FROM ${clientDB} WHERE id = ?`, [clientId]);
    
}; 

const create = ({name,lastname,address,phone,dob,email,dni}) => {
    return db.query(`INSERT INTO ${clientDB} (name,lastname,address,phone,dob,email,dni)VALUES(?,?,?,?,?,?,?)`, [name, lastname, address, phone, dob, email, dni])
}; 

const deleteClientById = (clientId) => {
    return db.query(`DELETE FROM ${clientDB} WHERE id =?`, [clientId]);
}; 

const update = (clientId, { name, lastname, address, phone, dob, email, dni }) => {
    return db.query(`UPDATE ${clientDB} SET client.name = ?, client.lastname= ?, client.address= ?, client.phone= ?, client.dob= ?, client.email= ?, client.dni= ? WHERE client.id= ?;`, [name, lastname, address, phone, dob, email, dni, clientId]);
}; 

module.exports = { getAll, getById, create, deleteClientById, update }