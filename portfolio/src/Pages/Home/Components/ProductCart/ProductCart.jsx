import { Link } from 'react-router-dom';
import s from './ProductCart.module.css'
let ProductCart = ({images, title, skill, link, index}) => {
    const colors = ['#D99012', '#12D915', '#121FD9', '#D91215', '#C112D9', '#D91293'];
    return(
        <Link to={link}>
            <div className={s.box} style={{'--i':index }} >
                <div className={s.images}>
                    <img src={images} alt=' ' />
                </div>
                <div className={s.title}>{title}</div>
                <ul className={s.skils}>
                    {skill.map((skill, index) => {
                        const randomColor = colors[Math.floor(Math.random() * colors.length)];
                        return(<li key={index} style={{backgroundColor: randomColor}}>{skill}</li>);
                    })}
                </ul>
            </div>
        </Link>
    )
}

export default ProductCart;