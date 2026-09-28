import CircularProgress from './CircularProgress';
import s from './SkillCart.module.css'
let SkillCart = ({name, proggres, bgcolor}) =>{
    return(
        <>
            <div className={s.box} style={{backgroundColor:bgcolor}}>
                <div className={s.title}>{name}</div>
                <CircularProgress n={proggres}/>
            </div>
        </>
    )
}

export default SkillCart;