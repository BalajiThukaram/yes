
const sequelize = require("./dbconn");

const dataFromKitchen = async()=>{
    try{
        const result = await sequelize.query(`SELECT * FROM eldercare WHERE location = 'Kitchen' ORDER BY id ASC`,{type: sequelize.QueryTypes.SELECT});
        return result;
    }catch(error){
        console.log(error)
    }
}


const recentKitchen = async()=>{
    try{
        const result = await sequelize.query(`SELECT *
        FROM eldercare
        WHERE location = 'Kitchen'
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
    dataFromKitchen,
    recentKitchen
}
