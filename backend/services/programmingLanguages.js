const config = require('../config');
const db = require('./db');
const helper = require('../helper');


/** Show Post/Data Pagination Wise */
async function getMultiple(page = 1){
  const offset = helper.getOffset1(page, config.listPerP);
  const rows = await db.query(
    `SELECT *FROM programming_languages LIMIT ${offset},${config.listPerP}`
    //`SELECT id, name, released_year, githut_rank, pypl_rank, tiobe_rank, created_at, updated_at FROM programming_languages LIMIT ${offset},${config.listPerP}`
  );
  const data = helper.emptyOrRows1(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}

/* create Post/Data Query */
async function createData(programmingLanguages){
  const result = await db.query(
    `INSERT INTO programming_languages (name, released_year, githut_rank, pypl_rank, tiobe_rank) VALUES ('${programmingLanguages.name}',${programmingLanguages.released_year},${programmingLanguages.githut_rank},${programmingLanguages.pypl_rank},${programmingLanguages.tiobe_rank})`);

  let message = 'Error In Create Programming Languages';

  if(result.affectedRows){
    message = 'Programming Languages Create Sucessfully !';
  }

  return {message};
}

/* Update Post/Data Query */
async function updateData(up_id, updateProgram) {
  const result = await db.query(
    `UPDATE programming_languages SET name = "${updateProgram.name}", released_year = ${updateProgram.released_year}, githut_rank = ${updateProgram.githut_rank}, pypl_rank = ${updateProgram.pypl_rank}, tiobe_rank = ${updateProgram.tiobe_rank} WHERE id = ${up_id}`
  );
  let message = 'Error in Update Database';
  if(result.affectedRows){
    message = 'Update Programming Languages Sucefully';
  }
  return{ message };
}

/** Delete Post/Data Query */
async function removeData(re_id) {
  const result = await db.query(
    `DELETE FROM programming_languages WHERE id = ${re_id}`
  );
  let message = ('Error Removed Data ?');
  if(result.affectedRows) {
    message = ('Removed Programming Lang. Sucessfully');
  }
  return { message };
}

module.exports = {
  getMultiple,
  createData,
  updateData,
  removeData
}