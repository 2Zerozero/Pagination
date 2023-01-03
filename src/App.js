import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Posts from './Posts';
import Pagination from './Pagination';
import TestUseEffect from './TestUseEffect';

function App() {
  const [posts, setPosts] = useState([]); // 게시글의 갯수
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); // 페이지네이션의 페이지
  const [postsPerPage, setPostPerPage] = useState(10); // 1 페이지당 보여줄 게시글의 갯수

  console.log(currentPage);

  // await 은 반드시 async 로 정의한 함수 내부에서만 사용가능하다.
  // async, await 은 promise 객체가 .than 으로 콜백 처리하는 부분을 좀 더 깔끔하게 작성할 수 있게 해준다.
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(response.data) // 해당 url 의 posts 를 가져온다.
      setLoading(false); // 데이터를 다 가져왔으니, Loading 은 다시 false 로 변경한다.
    };
    fetchData();
  }, []); // 초기값 배열 리터럴로 설정

  // 페이지네이션 관련 변수
  // 배열의 데이터를 나누어서 보여주기위해 , indexOfLast, indexOfFirst 변수를 선언
  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = (posts) => {
    let currentPosts = 0;
    currentPosts = posts.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  }

  return (
    <div className='App'>
      <Posts posts={currentPosts(posts)} loading={loading}></Posts>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={setCurrentPage}
      >
      </Pagination>
    </div>
  );
};

export default App;
