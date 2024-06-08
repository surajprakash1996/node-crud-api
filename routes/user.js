const express = require("express");
const router = express.Router();
const { handleGetAllUsers,
    handleGetUser,
    handleCreateNewUser,
    handleDeletAllUsers,
    handleDeleteUser,
    handleUpdateUser } = require("../controllers/user");


/** We do grouping with same route but action is different  */

router.route('/api/users').get(handleGetAllUsers).delete(handleDeletAllUsers);
router.route('/api/user/').get(handleGetUser).post(handleCreateNewUser).delete(handleDeleteUser).patch(handleUpdateUser)


module.exports = router;