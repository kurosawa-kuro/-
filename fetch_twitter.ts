require('dotenv').config();
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { Client } from 'twitter-api-sdk';


export async function fetch_twitter() {
    const client = new Client(process.env.TWITTER_BEARER_TOKEN as string);

    const userName = "dougu8122";

    const { data } = await client.users.findUserByUsername(userName);
    console.log({ data })
    const tweets = client.tweets.usersIdTweets(data!.id);
    for await (const page of tweets) {
        console.log(page.data);
    }
}