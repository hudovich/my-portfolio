import s from './Section.module.css'
let Section = ({children, color}) => {
    return(
        <div className={s.section} style={{backgroundColor:color}}>
             {children}
        </div>
    )
}

export default Section;