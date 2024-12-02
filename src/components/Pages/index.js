import {useEffect, useState} from "react";
import axios from "axios";

const Pages = () => {
    const [posts, setPosts] = useState([]);
    // let posts = [];
    useEffect(() => {
        let url = 'https://server1.hoolix.digital/wp-json/wp/v2/pages';
        axios.get(url).then((response) => {
            console.log(response.data);
            setPosts(response.data);
        });

    }, []);
    console.log('posts', posts);
    return <>
        {
             posts && posts.map((post) => {
                return (
                    <p key={post.id}>{post.title.rendered}</p>
                )
            })
        }
    </>;
}

export default Pages;