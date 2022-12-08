import React from "react";

import PostList from "./post/PostList";


export default function App() {
  return <CreatePost />;
}
const posts = [
 { title: 'React Hooks', content: 'The greatest thing since
sliced bread!', author: 'Kehinde Ogunnigbo' },
 { title: 'Using React Fragments', content: 'Keeping the DOM
tree clean!', author: 'Kehinde Ogunnigbo' }
]
export default function App () {
 return <PostList posts={posts} />
}