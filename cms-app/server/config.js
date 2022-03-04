
const config = {
    db: {
        /* don't expose password or any sensitive info, done only for demo */
        host: "localhost",
        user: "root", //username of your database
        password: "", //password if you have
        database: "cms",
    },
    listPerPage: 10,
};
module.exports = config;