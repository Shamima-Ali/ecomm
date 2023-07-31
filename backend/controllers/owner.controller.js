import mongoose from 'mongoose';
import Owner from '../mongodb/models/owner.js';
import { OAuth2Client } from 'google-auth-library';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';

dotenv.config();

// Create a jwt that expires in 3 days
const createToken = (_id) => {
    const secret = process.env.SECRET_JWT || 'sedrtyuiouygfd';
    return jwt.sign({_id}, secret, { expiresIn: '3d'});
}

const getAllOwners = async (req, res) => {};
const getOwnerInfoById = async (req, res) => {};

const createOwner = async (req, res) => {
    const { email, password } = req.body;

    // If email exists in db, do NOT create a new user with the same email
    const exists = await Owner.find({ email: email}) ;
    if (exists.length > 0) {
        res.status(400).json({ error: 'email exists in database' });
        return;
    }

    const session = await mongoose.startSession();
    session.startTransaction();
    console.log("session to create a new user started");

    // Create salt
    const salt = await bcrypt.genSalt(10);

    // Create salted password
    const passHash = await bcrypt.hash(password, salt);

    const newOwner = await Owner.create( {email, password: passHash} );

    await newOwner.save( {session} );
    await session.commitTransaction();
    console.log("transaction to create a new user committed");

    const newToken = createToken(newOwner._id);
    res.status(200).json({ email, newToken });
};

const editOwnerInfo = async (req, res) => {};
const verifyOwner = async (req, res) => {
    const { email, password } = req.body;

    const savedOwner = await Owner.find({ email: email });
    if (savedOwner.length == 0) {
        res.status(400).json({ error: 'no such user exists in database' });
        return;
    }

    // console.log("password  ", password);
    // console.log("savedOwner.password  ", savedOwner[0].password);
    const matchPassword = await bcrypt.compare(password, savedOwner[0].password);
    if (!matchPassword) {
        res.status(400).json({ error: 'invalid password' });
        return;
    }

    const newToken = createToken(savedOwner._id);
    res.status(200).json({ email, newToken});


};

export {
    getAllOwners,
    getOwnerInfoById,
    createOwner,
    editOwnerInfo,
    verifyOwner,
}

//using the Google OAuth
    // const jwtToken = req.body.credential;
    // const client = new OAuth2Client(process.env.TEST_CLIENT_ID);

    // // Call the verifyIdToken to verify and decode it
    // const ticket = await client.verifyIdToken({
    //     idToken: jwtToken,
    //     audience: process.env.TEST_CLIENT_ID,
    // });

    // // Get the JSON with all the user info
    // const payload = ticket.getPayload();
    // // This is a JSON object that contains all the user info

    // const savedOwner = await Owner.find({ email: payload.email}) ;
    // // console.log(savedOwner);

    // if (savedOwner.length > 0) {
    //     if (payload.email == savedOwner[0].email && payload.given_name == savedOwner[0].name) {
    //         console.log("Logged in");
    //         res.json(savedOwner);
    //     } else {
    //         console.log(savedOwner.email);
    //         console.error("Not an owner:", payload.email);
    //         res.json(savedOwner);
    //     }
    // } else {
    //     console.error("No such user in the database:", payload.email);
    //     res.json(savedOwner);
    // }