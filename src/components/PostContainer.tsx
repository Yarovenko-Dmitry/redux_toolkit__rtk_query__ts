import React, {useState} from 'react';
import {postAPI} from "../services/PostService";
import {PostItem} from "./PostItem";
import {IPost} from "../models/IPost";

export const PostContainer = () => {
  const [limit, setLimit] = useState<number>(100);

  const {data: posts, error, isLoading, refetch} = postAPI.useFetchAllPostsQuery(limit
    // , {pollingInterval: 1000}  // пинг запросов каждые 1000, реализация, как в вебсокетах почти
  );
  // const {data: posts, error, isLoading, refetch} = postAPI.useFetchAllPostsQuery(limit)

  const [createPost, {}] = postAPI.useCreatePostMutation()
  //  если надо {error: createError, isLoading: isCreateLoading} то
  // const [createPost, {error: createError, isLoading: isCreateLoading}] = postAPI.useCreatePostMutation()

  const [updatePost, {}] = postAPI.useUpdatePostMutation()
  const [deletePost, {}] = postAPI.useDeletePostMutation()

  /*
  // Пример того, как делается оптимальное количество запросов. например 10 и 3
  useEffect(() => {
      setTimeout(() => {
          setLimit(3)
      }, 2000)
    }, [])
    */

  const handleCreate = async () => {
    const title = prompt()
    await createPost({title, body: title} as IPost)
  }

  const handleRemove = (post: IPost) => {
    deletePost(post)
  }

  const handleUpdate = (post: IPost) => {
    updatePost(post)
  }

  return (
    <div>
      <div className="post__list">
        {/* refetch - принудительный запрос на сервер*/}
        <button onClick={() => refetch()}>REFETCH</button>
        <button onClick={handleCreate}>Add new post</button>

        {isLoading && <h1>Идет загрузка...</h1>}

        {error && <h1>Произошла ошибка при загрузке PostItems</h1>}

        {posts && posts.map(post =>
            // <PostItem key={post.id} post={post}/>
          <PostItem remove={handleRemove} update={handleUpdate} key={post.id} post={post}/>
        )}
      </div>
    </div>
  );
};
