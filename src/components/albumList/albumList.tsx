import { useAppSelector } from "../../redux/hooks"
import { userAlbumData } from "../../redux/usersPage/usersPageSelector"
import { AlbumListItem } from "./albumListItem/albumListItem"
import "./albumListStyles.scss"



export const AlbumList =()=>{

    const albums = useAppSelector(userAlbumData)

    return(
        <ul className="albumList">
            {albums.map(album=><AlbumListItem key={album.id} album={album}/>)}
        </ul>
    )
}