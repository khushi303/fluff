export default function CommonBtn(props) {
    return (
        <>
            <button className="rounded-2 text_sm fw-normal leading_150 bg_darkgreen text-white com_btn transition_linear">{props.btnname}{props.btnsvg}</button>
        </>
    )
}