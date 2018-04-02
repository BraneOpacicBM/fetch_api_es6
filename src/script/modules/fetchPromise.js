import {urlPosts, urlUsers} from './vars';

 class FetchPromise {
    fetchingPromise(url){
        return fetch(url)
        .then((res) => res.json());
    }
}


let userRequest = new FetchPromise();
export let userReq = userRequest.fetchingPromise(urlUsers);

let postRequest = new FetchPromise();
export let postReq = postRequest.fetchingPromise(urlPosts);