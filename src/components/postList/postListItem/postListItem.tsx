import "./postListItemStyles.scss"

interface Props{
    post:{
        title:string;
        body:string
    }
}

export const PostListItem=({post}:Props)=>{
    const {title, body}=post
    return(
        <li className="postItem">
            <h3>{title}</h3>
            <p>{body}</p>
        </li>
    )
}
