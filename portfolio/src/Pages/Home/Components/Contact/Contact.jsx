import s from './Contact.module.css'
import icon1 from './icons/image 1.svg'
import icon2 from './icons/image 2.svg'
import icon3 from './icons/image 3.svg'
let Contact = () => {
    return(
        <div className={s.box}>
            <p className={s.title}>Открыт к предложениям о работе и проектам</p>
            <div className={s.media}>
                <div className={s.item}>
                    <p>Контакты:</p>
                    <p>E-mail:<a href="mailto:vitaliycall@gmail.com">vitaliycall@gmail.com</a></p>
                    <p>Telefon:<a href="tel:+48534706146">+48 534-706-146</a></p>
                </div>
                <div className={s.icons}>
                    <a href="https://wa.me/48534706146" target="_blank"><img src={icon1} alt=' ' style={{width:'50px', height:'50px'}} /></a>
                    <a href="https://t.me/sikret95" target="_blank"><img src={icon3} alt=' ' style={{width:'50px', height:'50px', marginLeft:'20px'}} /></a>
                </div>
            </div>
            <p className={s.copy}>© 2026 Crafted by Hudovich</p>
        </div>
    )
}

export default Contact