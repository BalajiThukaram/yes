
const sequelize = require("./dbconn");

const dataFromHall = async()=>{
    try{
        const result = await sequelize.query(`SELECT * FROM eldercare WHERE location = 'Hall' ORDER BY id ASC`,{type: sequelize.QueryTypes.SELECT});
        return result;
    }catch(error){
        console.log(error)
    }
}

const recentHall = async()=>{
    try{
        const result = await sequelize.query(`SELECT *
        FROM eldercare
        WHERE location = 'Hall'
        ORDER BY created_date DESC, created_time DESC
        LIMIT 1;
        `,
        { type: sequelize.QueryTypes.SELECT })
        return result
    }catch(error){
        console.log(error)
    }
}
module.exports = {
    dataFromHall,
    recentHall
}

