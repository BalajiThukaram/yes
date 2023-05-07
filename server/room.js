const sequelize = require("./dbconn");

const dataFromRoom = async () => {
  try {
    const result = await sequelize.query(
      `SELECT * FROM eldercare WHERE location = 'Bedroom' ORDER BY id ASC`,
      { type: sequelize.QueryTypes.SELECT }
    );
    return result;
  } catch (error) {
    console.log(error);
  }
};

const recentRoom = async()=>{
  try{
      const result = await sequelize.query(`SELECT *
      FROM eldercare
      WHERE location = 'Bedroom'
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
  dataFromRoom,
  recentRoom
};
