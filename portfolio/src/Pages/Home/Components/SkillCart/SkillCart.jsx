import CircularProgress from './CircularProgress';
import s from './SkillCart.module.css'
let SkillCart = ({name, proggres, bgcolor, index}) =>{
    return(
        <>
            <div className={s.box} style={{backgroundColor:bgcolor,'--i':index }}>
                <div className={s.title}>{name}</div>
                <CircularProgress n={proggres}/>
            </div>
        </>
    )
}

export default SkillCart;