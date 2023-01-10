require('dotenv').config();

import { fetch_youtube } from "./fetch_youtube";
import { fetch_twitter } from "./fetch_twitter";

async function app() {
    console.log("start app")
    // console.log("rocess.env.YOUTUBE_API_KEY", process.env.YOUTUBE_API_KEY)
    // await fetch_youtube()
    await fetch_twitter()

    console.log("end app")
}

app()
    .catch((e) => {
        console.error(`There was an error while seeding: ${e}`);
        // process.exit(1);
    })
    .finally(async () => {
        console.log('finally end app.');
        // await prisma.$disconnect();
    });