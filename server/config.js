const config = {
    mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/SaleReportApp',
    port: process.env.PORT || 3000,
};
module.exports = config;