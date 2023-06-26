const tripDb = 'TravelAgency.trip';

const getAll = () => {
    return db.query(`SELECT * FROM ${tripDb}`);
}; 


const getById = (tripId) => {
    return db.query(`SELECT * FROM ${tripDb} WHERE id = ?`, [tripId]);
};

const create = ({departure_date, return_date, departure_flight,return_flight, hotel, Clients_id, Hotel_id }) => {
    return db.query (`INSERT INTO ${tripDb} (departure_date, return_date, departure_flight, return_flight, hotel, Clients_id, Hotel_id) VALUES (?,?,?,?,?,?,?)`, [departure_date, return_date, departure_flight, return_flight, hotel, Clients_id, Hotel_id]);
};

const deleteTripById = (tripId) => {
    return db.query(`DELETE FROM ${tripDb} WHERE id=?`, [tripId]);
};

const update = (tripId, { departure_date, return_date, departure_flight, return_flight, hotel, Clients_id, Hotel_id }) => {
    return db.query(`UPDATE ${tripDb} SET  trip.departure_date= ?, trip.return_date= ?, trip.departure_flight= ?,trip.return_flight= ?, trip.hotel= ?, trip.Clients_id= ?, trip.Hotel_id= ? WHERE trip.id=?:`, [departure_date, return_date, departure_flight, return_flight, hotel, Clients_id, Hotel_id, tripId]);
};

const updateById = ( tripId, clientId ) => {
    return db.query(`UPDATE ${tripDb} SET trip.Clients_id = ? WHERE trip.id= ?`, [clientId, tripId])
}; 

module.exports = { getAll, getById, create, deleteTripById, update, updateById }; 