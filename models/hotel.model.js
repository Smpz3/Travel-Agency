const hotelDb = 'TravelAgency.hotel'; 

const getAll = () => {
    return db.query(`SELECT * FROM ${hotelDb}`);
}; 

const getById = (hotelId) => {
    return db.query(`SELECT * FROM ${hotelDb} WHERE id = ?`, [hotelId]);
}; 

const create = ({ name, address, city, star_rating, description, nightly_rate }) => {
    return db.query(`INSERT INTO ${hotelDb} (name, address, city, star_rating, description, nightly_rate) VALUES (?,?,?,?,?,?)`, [name, address, city, star_rating, description, nightly_rate]);
}; 
const deleteHotelById = (hotelId) => {
    return db.query(`DELETE FROM ${hotelDb} WHERE id=?`, [hotelId]);
};

const update = (hotelId, { name, address, city, star_rating, description, nightly_rate }) => {
    return db.query(`UPDATE ${hotelDb} SET hotel.name = ?, hotel.address = ?, hotel.city = ?, hotel.star_rating = ?, hotel.description = ?, hotel.nightly_rate = ? WHERE hotel.id = ?;`, [name, address, city, star_rating, description, nightly_rate, hotelId]);
};

module.exports = { getAll, getById, create, deleteHotelById, update }; 