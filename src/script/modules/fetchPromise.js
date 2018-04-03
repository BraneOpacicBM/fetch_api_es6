import {urlPosts, urlUsers} from './consts';

 class FetchPromise {
    fetchingPromise(url){
        return fetch(url)
        .then((res) => res.json());
    }
}


const userRequest = new FetchPromise();
export const userReq = userRequest.fetchingPromise(urlUsers);

const postRequest = new FetchPromise();
export const postReq = postRequest.fetchingPromise(urlPosts);