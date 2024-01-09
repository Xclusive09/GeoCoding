const Data = require('../model/data');
const axios = require('axios');

// Controller functions
exports.getAllData = async (req, res) => {
    try {
        const allData = await Data.find();
        res.json(allData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.addData = async (req, res) => {
    try {
        const { address, name, description } = req.body;

        // Perform geocoding using an external API (Here, using OpenStreetMap Nominatim API)
        const response = await axios.get(`https://nominatim.openstreetmap.org/search?format=json&q=${address}`);
        
        if (response.data.length === 0) {
            throw new Error('No geocoding results found');
        }
        
        const { lat, lon } = response.data[0];

        const newData = await Data.create({ name, description, address, lat, lon });
        res.status(201).json(newData);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
