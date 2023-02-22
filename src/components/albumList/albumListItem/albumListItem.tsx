import "./albumListItemStyles.scss"
interface Props {
    album: {
        userId: number
        id: number
        title: string
    }
}

export const AlbumListItem = ({ album }: Props) => {
    const { title } = album

    return (
        <li className="albumListItem">
            <h3>{title}</h3>
        </li>
    )
}