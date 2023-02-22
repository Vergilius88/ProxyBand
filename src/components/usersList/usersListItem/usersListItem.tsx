import "./usersListItemStyles.scss"
import { useNavigate } from "react-router-dom"
import { routes } from "../../../assets/routes"
import { User } from "../../../redux/Api/api"
import { useAppDispatch } from "../../../redux/hooks"
import { getUserPostList } from "../../../redux/postsPage/postPageOperation"

interface Props {
    usrData: User,
    setUserId: (userId: number) => void
}

export const UsersListItem = ({ usrData, setUserId }: Props) => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate();

    const { name, username, email, id } = usrData


    const toPosts = () => {
        dispatch(getUserPostList({ userId: id }))
        navigate(routes.posts)
    }

    return (
        <li className="usersListItem" >
            <p>Имя: <span>{name}</span> </p>
            <p>Ник: <span>{username}</span> </p>
            <p>Почта: <span>{email}</span> </p>
            <div className="usersListItemButtonWrapper">
                <button onClick={() => toPosts()}>Посты</button>
                <button onClick={() => setUserId(id)}>Альбомы</button>
            </div>
        </li>
    )
}