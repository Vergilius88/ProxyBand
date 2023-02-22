import "./postListStyles.scss"
import { PostListItem } from "./postListItem/postListItem"
import { useAppSelector } from "../../redux/hooks"
import { userPostsData } from "../../redux/postsPage/postPageSelector"


export const PostList=()=>{
    const posts = useAppSelector(userPostsData)

    return(
        <ul className="postList">
            {posts?.map(post=><PostListItem key={post.id} post={post}/>)}
        </ul>
    )
}