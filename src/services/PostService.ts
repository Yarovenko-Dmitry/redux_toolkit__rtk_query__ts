import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IPost} from "../models/IPost";


export const postAPI = createApi({
  reducerPath: 'postAPI', //ВАЖНО!!! уникальный ключ
  // baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com'}), // работа с удаленным сервером
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000'}), // работа с локальным сервером json-server для добавления, обновления и удаления данных

  tagTypes: ['Post'], // json-server // для того, чтобы посты сразу подтягивались при их добавлении

  endpoints: (build) => ({
    fetchAllPosts: build.query<IPost[], number>({ // build.query - (get) -  получать данные,  build.mutation - (post) менять данные
      query: (limit: number = 5) => ({
        url: `/posts`,
        params: {
          _limit: limit
        }
      }),
      providesTags: result => ['Post'] // json-server, тег, который показывает, с чем работаем
    }),

    // работа с локальным сервером json-server
     createPost: build.mutation<IPost, IPost>({ // build.query - (get) -  получать данные,  build.mutation - (post) менять данные
       query: (post) => ({
         url: `/posts`,
         method: 'POST',
         body: post
       }),
       invalidatesTags: ['Post'] // тег, который показывает, что посты не валидны и надо обновить
     }),

// работа с локальным сервером json-server
    updatePost: build.mutation<IPost, IPost>({
      query: (post) => ({
        url: `/posts/${post.id}`,
        method: 'PUT',
        body: post
      }),
      invalidatesTags: ['Post'] // тег, который показывает, что посты не валидны и надо обновить
    }),

    // работа с локальным сервером json-server
    deletePost: build.mutation<IPost, IPost>({
      query: (post) => ({
        url: `/posts/${post.id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Post'] // тег, который показывает, что посты не валидны и надо обновить
    }),
  })
})
