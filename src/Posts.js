import React from "react";

const Posts = ({ posts, loading }) => {
    return (
        <>
            {/* loading 의 값이 true 일때, && 다음의 것을 표시 */}
            {loading && <div> Loading . . . </div>}
            {/* mapping 을 할때는, 해당 요소에 key 값을 이용해야한다. 
            key 값으로 구분이 될만한 값은 id 라서, 대부분은 key 값에 {ex.id} 로 전달한다. 
            */}
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </>
    );
}

export default Posts;
