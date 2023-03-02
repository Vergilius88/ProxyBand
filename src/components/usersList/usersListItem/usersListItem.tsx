import "./usersListItemStyles.scss"
import { useNavigate } from "react-router-dom"
import { routes } from "../../../assets/routes"
import { User } from "../../../redux/api/api"
import { useAppDispatch } from "../../../redux/hooks"
import { getUserPostList } from "../../../redux/postsPage/postPageOperation"

interface Props {
    userData: User,
    setUserId: (userId: number) => void
}

export const UsersListItem = ({ userData, setUserId }: Props) => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate();

    const { name, username, email, phone, website, address, company, id } = userData


    const toPosts = () => {
        dispatch(getUserPostList({ userId: id }))
        navigate(routes.posts)
    }

    return (
        <li className="usersListItem" >
            <p>Ім'я: <span>{name}</span> </p>
            <p>Нік: <span>{username}</span> </p>
            <p>Місце роботи: <span>{company.name}</span> </p>
            <p>Пошта: <span>{email}</span> </p>
            <p>Телефон: <span>{phone}</span></p>
            <p>Домашня сторінка: <span>{website}</span> </p>
            <p>Домашній адрес: <span>{address.zipcode} {address.street} {address.suite} {address.city}</span> </p>
            <div className="usersListItemButtonWrapper">
                <button onClick={() => toPosts()}>Пости</button>
                <button onClick={() => setUserId(id)}>Альбоми</button>
            </div>
        </li>
    )
}