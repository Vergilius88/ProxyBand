import "./usersListItemStyles.scss"
import { useNavigate } from "react-router-dom"
import { routes } from "../../../assets/routes"
import { User } from "../../../redux/api/api"
import { useAppDispatch } from "../../../redux/hooks"
import { getUserPostList } from "../../../redux/postsPage/postPageOperation"
import { getUserAlbumsList } from "../../../redux/usersPage/usersPageOperations"

interface Props {
    userData: User,
    showModal: () => void
}

export const UsersListItem = ({ userData, showModal }: Props) => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate();

    const { name, username, email, phone, website, address, company, id } = userData

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
                <button onMouseEnter={() => { dispatch(getUserPostList({ userId: id })) }} onClick={() => navigate(routes.posts)} >Пости</button>
                <button onMouseEnter={() => { dispatch(getUserAlbumsList({ userId: id })) }} onClick={() => showModal()}>Альбоми</button>
            </div>
        </li>
    )
}