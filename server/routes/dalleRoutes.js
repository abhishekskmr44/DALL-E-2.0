import express from "express";

import * as dotenv from "dotenv";

import { Configuration, OpenAIApi } from "openai";

dotenv.config();

// we're creating new instance of router
const router = express.Router();

const configuration = new Configuration({
apiKey : process.env.OPENAI_API_KEY,    
})

const openai = new OpenAIApi(configuration);

router.route("/").get((req,res)=>{
  res.send("Hello from DALL-E!")  
})

// you have to make it async
router.route("/").post(async(req,res)=>{
    try {
        const { prompt } = req.body;
        const aiResponse = await openai.createImage({
            prompt,
            n:1,
            size:"1024x1024",
            response_format:"b64_json",
        })
        // we need to get the image
        const image = aiResponse.data.data[0].b64_json;

        // after getting the image
        res.status(200).json({photo:image})
    } catch (error) {
        console.log(error);
    res.status(500).send(error?.response.data.error.message)
    }

})

export default router