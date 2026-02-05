// "use client"

import { useState } from "react";

export default function Likes() {
    const [likesCount, setLikesCount] = useState(0);
  //  await new Promise((resolve) => setTimeout(resolve, 10000));
//   console.log(window); 
  return <div onClick={()=>{
    setLikesCount((prev) => prev+1);
  }}>{likesCount} Likes</div>
}

// Server components execute only on the server
// Client components execute on the server as well as on the client
