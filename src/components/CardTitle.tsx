import { useState, useRef } from "react";
import "../styles/Card.css"


export default function CardTitle(props: any) {
    let [isTitleEditable, setIsTitleEditable] = useState(false);

    const titleAreaRef = useRef<HTMLTextAreaElement>(null);

    function toggleIsTitleEditable() {
        setIsTitleEditable(!isTitleEditable);
        setTimeout(() => {
            if (titleAreaRef && titleAreaRef.current) {
                titleAreaRef.current.select();
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
            {isTitleEditable
                ?
                <textarea value={props.title} ref={titleAreaRef} className="title-input" placeholder="Write a title..."
                    onChange={(event) => props.setTitle(event.target.value)}
                    onClick={handleTextSelection}
                />
                :
                <p className="title-text" onClick={toggleIsTitleEditable}>
                    {props.title}
                </p>
            }
        </>
    )
}
