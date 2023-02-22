import "./headerStyles.scss"

interface Props {
    title: string
}
export const Header = ({ title }: Props) => {
    return (
        <header className="headerWrapper">
            <h2 className="titlePage">{title}</h2>
        </header>

    )
}