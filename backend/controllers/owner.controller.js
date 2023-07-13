import Owner from '../mongodb/models/owner.js';
import { OAuth2Client } from 'google-auth-library';
import * as dotenv from 'dotenv';

const getAllOwners = async (req, res) => {};
const getOwnerInfoById = async (req, res) => {};
const createOwner = async (req, res) => {};
const editOwnerInfo = async (req, res) => {};
const verifyOwner = async (req, res) => {
    const jwtToken = req.body.credential;
    const client = new OAuth2Client(process.env.TEST_CLIENT_ID);

    // Call the verifyIdToken to verify and decode it
    const ticket = await client.verifyIdToken({
        idToken: jwtToken,
        audience: process.env.TEST_CLIENT_ID,
    });

    // Get the JSON with all the user info
    const payload = ticket.getPayload();
    // This is a JSON object that contains all the user info

    const savedOwner = await Owner.find({ email: payload.email}) ;
    console.log(savedOwner);

    if (savedOwner.length > 0) {
        if (payload.email == savedOwner[0].email && payload.given_name == savedOwner[0].name) {
            console.log("Logged in");
            res.json(savedOwner);
        } else {
            console.log(savedOwner.email);
            console.error("Not an owner:", payload.email);
            res.json(savedOwner);
        }
    } else {
        console.error("No such user in the database:", payload.email);
        res.json(savedOwner);
    }
};

export {
    getAllOwners,
    getOwnerInfoById,
    createOwner,
    editOwnerInfo,
    verifyOwner,
}