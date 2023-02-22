import { forwardRef } from "react"
import "./modal.scss"

interface Props {
    content: JSX.Element
    hideModal: React.Dispatch<React.SetStateAction<boolean>>
}

export const Modal = forwardRef(({ content, hideModal }: Props, ref: any) => {
    return (
        <div className="modalOverlay" >
            <div className="modalContentWrapper"  ref={ref}>
            {content}
            <button className="modalCloseButton" onClick={() => hideModal(false)}>&#9932;</button>
        </div></div>


    )
})