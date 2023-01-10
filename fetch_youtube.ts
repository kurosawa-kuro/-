require('dotenv').config();
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";


export async function fetch_youtube() {
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