import { useEffect, useState } from "react";

import IPost from "../../interfaces/IPost";
import { api } from "../../services/api";
import { Post } from "../Post";
import "./styles.css";

export function Posts() {
    const [posts, setPosts] = useState<any>([]);

    useEffect(() => {
        api.get("/posts").then((response) => {
            console.log(response);
            setPosts(response.data);
        });
    }, []);

    return (
        <ul>
            {posts?.map((post: IPost) => {
                return (
                    <Post title={post.title} description={post.description} />
                );
            })}
        </ul>
    );
}
