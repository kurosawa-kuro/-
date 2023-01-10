require('dotenv').config();
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
const youtube_api = "AIzaSyBamG77fPrxng8AGGXT5syA6so2bcvt8xg"
const url = `https://www.googleapis.com/youtube/v3/search`;

const options: AxiosRequestConfig = {
    url: `${url}`,
    method: "GET",
    params: {
        part: 'snippet',
        // q: keyword,
        maxResults: 50,
        key: process.env.YOUTUBE_API_KEY  // 取得したAPIキーを設定
    }
};
async function fetch_youtube() {
    await axios(options)
        .then((res: AxiosResponse<any>) => {
            const { data, status } = res;
            //やりたいことをやる
            // console.log({ data })
            console.log(data.items)
        })
        .catch((e: AxiosError<{ error: string }>) => {
            // エラー処理
            console.log(e.message);
        });
}
async function app() {
    console.log("start app")
    // console.log("rocess.env.YOUTUBE_API_KEY", process.env.YOUTUBE_API_KEY)
    await fetch_youtube()

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