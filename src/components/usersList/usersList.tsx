import { useRef, useState } from "react"
import { useAppSelector } from "../../redux/hooks"
import { usersListData } from "../../redux/usersPage/usersPageSelector"
import { useOnClickOutside } from "../../utils/outsideClick/outsideClick"
import { AlbumList } from "../albumList/albumList"
import { Modal } from "../modal/modal"
import { UsersListItem } from "./usersListItem/usersListItem"
import "./usersListStyles.scss"


export const UsersList = () => {
    const ref = useRef();

    const users = useAppSelector(usersListData)
    const [visibilityModal, setVisibilityModal] = useState(false)

    const showModal = () => {
        setVisibilityModal(true);
    }
    const hideModal = () => {
        setVisibilityModal(false);
    }

    useOnClickOutside(ref, () => {
        setVisibilityModal(false);
    });


    return (
        <>
            <ul className="usersList">
                {users?.map(user => <UsersListItem key={user.id} userData={user} showModal={showModal} />)}
            </ul>
            {visibilityModal && <Modal content={<AlbumList />} hideModal={hideModal} ref={ref} />}

        </>
    )
}