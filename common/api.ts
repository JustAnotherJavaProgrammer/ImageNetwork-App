import axios from "axios";

export type FakeUser = {
    name: {
        title: string;
        first: string;
        last: string;
    },
    email: string;
    login: {
        username: string;
    },
    picture:{
        large: string,
        medium: string,
        thumbnail: string
    }
}

export async function getText() {
    return await (await axios.get("https://randomuser.me/api/", {responseType: "json"})).data.results[0] as FakeUser;
}