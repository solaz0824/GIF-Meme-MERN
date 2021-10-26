import axios from "axios";
import { getCurrentUserToken } from "../services/auth";

export async function syncUserData(user) {
  const userToken = await getCurrentUserToken();
  return axios({
    method: "POST",
    url: `${process.env.REACT_APP_API_BASE_URL}/users/login`,
    data: { user },
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
}

export async function getUserProfile(id) {
  const userToken = await getCurrentUserToken();
  return axios({
    method: "GET",
    url: `${process.env.REACT_APP_API_BASE_URL}/users/${id}`,
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
}

export async function uploadItemData(metadata, image) {
  console.log(metadata, image);
  const userToken = await getCurrentUserToken();
  return axios({
    method: "POST",
    url: `${process.env.REACT_APP_API_BASE_URL}/items`,
    data: { metadata, image },
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
}

export async function getAllItemsData(fail = false) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (fail) {
        rej(new Error("Failed to fetch"));
      }
      res(axios.get(`${process.env.REACT_APP_API_BASE_URL}/items`));
    }, 1000);
  });
}

//? gif api

export function getTrending(fail = false) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (fail) {
        rej(new Error("Failed to fetch"));
      }
      res(axios.get(`https://g.tenor.com/v1/trending?key=JZ48O1IW6LCI`));
    }, 1000);
  });
}
export function getReactions(fail = false) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (fail) {
        rej(new Error("Failed to fetch"));
      }
      res(
        axios.get(`https://g.tenor.com/v1/random?q=reaction&key=JZ48O1IW6LCI`)
      );
    }, 1000);
  });
}
export function getEmojis(fail = false) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (fail) {
        rej(new Error("Failed to fetch"));
      }
      res(axios.get(`https://g.tenor.com/v1/random?q=emoji&key=JZ48O1IW6LCI`));
    }, 1000);
  });
}

export function getRandomItems(fail = false) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (fail) {
        rej(new Error("Failed to fetch"));
      }
      res(axios.get(`https://g.tenor.com/v1/random?&key=JZ48O1IW6LCI`));
    }, 1000);
  });
}
export function getStickers(fail = false) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (fail) {
        rej(new Error("Failed to fetch"));
      }
      res(
        axios.get(`https://g.tenor.com/v1/search?q=sticker?&key=JZ48O1IW6LCI`)
      );
    }, 1000);
  });
}
export function getSad(fail = false) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (fail) {
        rej(new Error("Failed to fetch"));
      }
      res(axios.get(`https://g.tenor.com/v1/random?q=sad&key=JZ48O1IW6LCI`));
    }, 1000);
  });
}
export function getGoodMorning(fail = false) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (fail) {
        rej(new Error("Failed to fetch"));
      }
      res(
        axios.get(
          `https://g.tenor.com/v1/random?q=goodmorning&key=JZ48O1IW6LCI`
        )
      );
    }, 1000);
  });
}
export function getAngry(fail = false) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (fail) {
        rej(new Error("Failed to fetch"));
      }
      res(axios.get(`https://g.tenor.com/v1/random?q=angry&key=JZ48O1IW6LCI`));
    }, 1000);
  });
}
export function getWorking(fail = false) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (fail) {
        rej(new Error("Failed to fetch"));
      }
      res(
        axios.get(`https://g.tenor.com/v1/random?q=working&key=JZ48O1IW6LCI`)
      );
    }, 1000);
  });
}
