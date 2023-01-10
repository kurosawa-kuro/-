require('dotenv').config();
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

const url = `https://www.googleapis.com/youtube/v3/search?key=$${process.env.YOUTUBE_API_KEY}`;

const options: AxiosRequestConfig = {
    url: `${url}`,
    method: "GET",
};

async function app() {
    console.log("start app")
    // console.log("rocess.env.YOUTUBE_API_KEY", process.env.YOUTUBE_API_KEY)

    await axios(options)
        .then((res: AxiosResponse<any>) => {
            const { data, status } = res;
            //やりたいことをやる
            console.log({ data })
        })
        .catch((e: AxiosError<{ error: string }>) => {
            // エラー処理
            console.log(e.message);
        });
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