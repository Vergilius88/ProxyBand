import "./modal.scss"

interface Props {
    content: JSX.Element
    click:any
}

export const Modal = ({content, click}:Props) => {
    return (
        <div className="modalOverlay">
            <div className="modalContentWrapper">
                {content}
                <button className="modalCloseButton" onClick={click}>&#9932;</button>
            </div>
        </div>
    )
}