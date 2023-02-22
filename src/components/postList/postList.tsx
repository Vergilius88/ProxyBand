import "./postListStyles.scss"
import { testPostsData } from "../../assets/testData"
import { PostListItem } from "./postListItem/postListItem"


export const PostList=()=>{
    return(
        <ul className="postList">
            {testPostsData.map(post=><PostListItem key={post.id} post={post}/>)}
        </ul>
    )
}