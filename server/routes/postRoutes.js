import express from "express";

import * as dotenv from "dotenv";

import { v2  as cloudinary } from "cloudinary";

import Post from "../mongodb/models/post.js";

dotenv.config();

// we're creating new instance of router
const router = express.Router();

export default router