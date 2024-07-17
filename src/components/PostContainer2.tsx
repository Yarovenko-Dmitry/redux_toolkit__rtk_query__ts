import React from 'react';
import {postAPI} from "../services/PostService";
import {PostItem} from "./PostItem";

export const PostContainer2 = () => {
    const {data: posts, error, isLoading} =  postAPI.useFetchAllPostsQuery(10)
    return (
        <div>
            <div className="post__list">
                {isLoading && <h1>Идет загрузка...</h1>}
                {error && <h1>Произошла ошибка при загрузке</h1>}
                {/*закомментировано, чтобы не мешался второй список при добавлении нового функционала*/}
                {/*{posts && posts.map(post =>*/}
                {/*    <PostItem key={post.id} post={post}/>*/}
                {/*)}*/}
            </div>
        </div>
    );
};
