import {useEffect, useState} from "react";
import axios from "axios";

const Pages = () => {
    const [posts, setPosts] = useState([]);
    // let posts = [];
    useEffect(() => {
        let url = `${process.env.REACT_APP_API_ROOT}/posts`;
        axios.get(url).then((response) => {
            console.log(response.data);
            setPosts(response.data);
        });

    }, []);
    console.log('posts', posts);
    return <>
        <div className="w-4/5 py-10 m-auto flex justify-between align-middle flex-wrap gap-10">
            {
                posts && posts.map((post) => {
                    // Format the date
                    const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    });

                    // Parse the HTML to extract the image URL
                    const parser = new DOMParser();
                    const htmlDoc = parser.parseFromString(post.content.rendered, "text/html");
                    const imgElement = htmlDoc.querySelector("img2"); // Select the first <img2> tag
                    const imageUrl = imgElement ? imgElement.src : "https://placehold.co/500"; // Fallback if no image

                    return (
                        <div key={post.id}
                             className="card p-3 w-[330px] shadow-blue-300 shadow-lg rounded-lg flex gap-5 flex-col">
                            <div className='relative'>
                                <img src={imageUrl} className="h-[310px] w-full border-2 border-blue-300" alt={post.title.rendered}/>
                                <span
                                    className="text--blue-300 text-sm absolute bottom-[-1.5rem] left-2">ID :- {post.id}</span> {/* Date below image */}
                                <span
                                    className="text--blue-300 text-sm absolute bottom-[-1.5rem] right-2">{formattedDate}</span> {/* Date below image */}
                            </div>
                            <h2 className="text-2xl font-bold py-2 t">{post.title.rendered}</h2>
                            <p className="text-lg" dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}></p>
                        </div>
                    );
                })
            }
        </div>

    </>;
}

export default Pages;