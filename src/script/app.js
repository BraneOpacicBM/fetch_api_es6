import '../assets/styles/main.scss';
import {urlPosts, urlUsers, div} from './modules/consts';
import {Element} from './modules/element';
import {userReq, postReq} from './modules/fetchPromise';


Promise.all([userReq, postReq])
        .then((res) => {
            // get the data
            const users = res[0];
            // shuffle the posts and get only 10
            const posts = res[1].sort(() => .5 - Math.random()).slice(0, 10);
        
            posts.forEach((post) => {
                
                // create Elements from class Element

                let itemContainer = Element.createNode("div");
                Element.addClass(itemContainer, "item");
                let paragTitle = Element.createNode("p");
                Element.addClass(paragTitle, "title");
                let paragBody = Element.createNode("p");
                Element.addClass(paragBody, "content");
                let paragUser = Element.createNode("p");
                Element.addClass(paragUser, "user");

                // fill up the content with JSON

                paragTitle.innerHTML = post.title;
                paragBody.innerHTML = post.body;
                paragUser.innerHTML = `By: ${users[post.userId - 1].name}`;

                // append Elements using class Element

                Element.append(itemContainer, paragTitle);
                Element.append(itemContainer, paragBody);
                Element.append(itemContainer, paragUser);
                Element.append(div, itemContainer);


            });
        })
        .catch((err) => console.log(err));