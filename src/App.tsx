import React, {useEffect} from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {fetchUsers} from "./store/reducers/ActionCreators";
import {PostContainer} from "./components/PostContainer";
import {PostContainer2} from "./components/PostContainer2";

export const App = () => {

  // COUNTER start
  /*  const {count} = useAppSelector(state => state.userReducer)
    const {increment} = userSlice.actions;
    const dispatch = useAppDispatch();
    console.log('>>> increment(10)) :', increment(10));*/
  // COUNTER finish

  // USERS REDUCERS || USERS EXTRAREDUCERS
  const dispatch = useAppDispatch();
  const {users, isLoading, error} = useAppSelector(state => state.userReducer)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])
  // USERS REDUCERS || USERS EXTRAREDUCERS


  // const dispatch = useAppDispatch()
  // const {users, isLoading, error} = useAppSelector(state => state.userReducer)
  //
  // useEffect(() => {
  //     dispatch(fetchUsers())
  // }, [ ])

  return (
    <>
      {/*COUNTER start*/}
      {/*
      <div className="App">
        <h1>{count}</h1>
        <button onClick={() => dispatch((increment(10)))}>INCREMENT</button>
      </div>
      */}
      {/*COUNTER finish*/}

      {/*USERS REDUCERS || USERS EXTRAREDUCERS*/}
      {/*      <div className="App">
        {isLoading && <h1>Идет загрузка...</h1>}

        {error && <h1>{error}</h1>}

        {JSON.stringify(users, null, 2)}
      </div>*/}
      {/*USERS REDUCERS || USERS EXTRAREDUCERS*/}


      <div className="App">
        <div style={{display: 'flex'}}>
          <PostContainer/>
          <PostContainer2/>
        </div>
      </div>
    </>

  )
};
