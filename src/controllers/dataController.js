const Data = require('../models/dataModel');
const { setCache, getCache } = require('../services/cacheService');

const getData = async (req, res) => {
    const { id } = req.params;

    getCache(id, async (err, cachedData) => {
        if (err) return res.status(500).json({ error: 'Internal Server Error' });

        if (cachedData) {
            return res.status(200).json(cachedData);
        }

        try {
            const data = await Data.findById(id);
            if (!data) {
                return res.status(404).json({ message: 'Data not found' });
            }
            setCache(id, data);
            return res.status(200).json(data);
        } catch (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    });
};

module.exports = { getData };