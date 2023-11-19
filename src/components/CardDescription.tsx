import { useState, useRef, } from "react";
import EditIcon from '@mui/icons-material/Edit';
import "../styles/Card.css"

export default function CardDescription(props:any) {
    let [isDescriptionEditable, setIsDescriptionEditable] = useState(false);

    const descriptionAreaRef = useRef<HTMLTextAreaElement>(null);

    function toggleIsDescriptionEditable() {
        setIsDescriptionEditable(!isDescriptionEditable);
        setTimeout(() => {
            if (descriptionAreaRef && descriptionAreaRef.current) {
                descriptionAreaRef.current.select();
            }
        })
    }

    function handleTextSelection(event: any) {
        if (event && event.target) {
            event.target.select();
        }
    }


    return (
        <>
            {isDescriptionEditable ?
                <textarea value={props.description} ref={descriptionAreaRef} name="description" className="description-input" placeholder="Write a description..."
                    onChange={(event) => props.setDescription(event.target.value)}
                    onClick={handleTextSelection} />
                :
                <p onClick={toggleIsDescriptionEditable} className="description-text" style={{ textAlign: "justify" }}>
                    {props.description}
                </p>
            }
        </>


    )
}