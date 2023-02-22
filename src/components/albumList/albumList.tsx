import { testAlbumsData } from "../../assets/testData"
import { AlbumListItem } from "./albumListItem/albumListItem"
import "./albumListStyles.scss"

export const AlbumList =()=>{
    return(
        <ul className="albumList">
            {testAlbumsData.map(album=><AlbumListItem key={album.id} album={album}/>)}
        </ul>
    )
}