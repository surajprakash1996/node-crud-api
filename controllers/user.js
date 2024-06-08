const UserModel = require("../models/user");
const { logData } = require("../utils");

async function handleGetAllUsers(req, res) {

    try {
        const userData = await UserModel.find({});
        return res.status(200).json({
            data: userData
        });
    }
    catch (err) {
        const data = `Error : HandleGetAllUser | Message - ${err.message} | Path - ${req.path} | Method - ${req.method}`;
        logData("errors.txt", data);
        return res.status(500).json({ error: err.message });
    }

}

async function handleGetUser(req, res) {
    const userID = req.body.id;
    try {

        if (!userID) {
            return res.status(400).json({ message: `User id not found.` })
        }

        const userData = await UserModel.findById(userID);

        if (!userData) {
            return res.status(400).json({ message: `User not found` })
        }

        return res.status(200).json({
            data: {
                user: userData
            }
        });


    }
    catch (err) {
        const data = `Error : handleGetUser - | Message - ${err.message} | Path - ${req.path} | Method - ${req.method} | User ID = ${userID}`;
        logData("errors.txt", data);
        return res.status(500).json({ error: err.message });
    }
}

async function handleCreateNewUser(req, res) {

    try {

        const bodyData = req.body;

        if (!bodyData || !bodyData.firstName || !bodyData.email || !bodyData.jobTitle) {
            return res.status(400).json({ message: `Fields are required.` })
        }

        const userData = await UserModel.create(bodyData);

        if (!userData) {
            return res.status(400).json({ message: `User not created.` });
        }

        return res.status(201).json({
            data: {
                user: userData
            }
        });

    }
    catch (err) {
        const data = `Error : handleCreateNewUser - | Message - ${err.message} | Path - ${req.path} | Method - ${req.method}`;
        logData("errors.txt", data);
        return res.status(500).json({ error: err.message });
    }
}

async function handleDeletAllUsers(req, res) {
    try {

        const userData = await UserModel.deleteMany({});

        if (!userData) {
            return res.status(400).json({ message: `Not deleted.` });
        }

        return res.status(200).json({ message: 'All User deleted.' });
    }
    catch (err) {
        const data = `Error : handleDeletAllUsers - | Message - ${err.message} | Path - ${req.path} | Method - ${req.method}`;
        logData("errors.txt", data);
        return res.status(500).json({ error: err.message });
    }
}

async function handleDeleteUser(req, res) {
    const userID = req.body.id;
    if (!userID) {
        return res.status(400).json({ message: `User id not found.` })
    }

    try {

        const userData = await UserModel.findByIdAndDelete(userID);

        if (!userData) {
            return res.status(400).json({ message: `User not found` })
        }

        return res.status(200).json({
            data: {
                message: `${userID} - User deleted.`
            }
        });

    }
    catch (err) {
        const data = `Error : handleDeleteUser - | Message - ${err.message} | Path - ${req.path} | Method - ${req.method} | User ID = ${userID}`;
        logData("errors.txt", data);
        return res.status(500).json({ error: err.message });
    }
}

async function handleUpdateUser(req, res) {

    const body = req.body;
    const userID = req.body.id;

    if (!body || !userID) {
        return res.status(400).json({ message: `User not found` })
    }

    try {

        const userData = await UserModel.findByIdAndUpdate(userID, body, { new: true });

        if (!userData) {
            return res.status(400).json({ message: `User not updated.` });
        }

        return res.status(200).json({
            message: `${userID} user updated.`,
            user: userData
        });
    }
    catch (err) {
        const data = `Error : handleUpdateUser - | Message - ${err.message} | Path - ${req.path} | Method - ${req.method} | User ID = ${userID}`;
        logData("errors.txt", data);
        return res.status(500).json({ error: err.message });
    }
}

module.exports = {
    handleGetAllUsers,
    handleGetUser,
    handleCreateNewUser,
    handleDeletAllUsers,
    handleDeleteUser,
    handleUpdateUser
}