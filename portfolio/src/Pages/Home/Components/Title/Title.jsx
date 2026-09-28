import s from "./Title.module.css"
let Title = ({text, id}) => {
    return(
        <div id={id} className={s.title}>
            <p>{text}</p>
        </div>
    )
}

export default Title;