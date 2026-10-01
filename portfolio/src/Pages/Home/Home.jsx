import { HashLink } from 'react-router-hash-link';
import s from './Home.module.css';
import Title from "./Components/Title/Title"
import Section from './Components/Section/Section';
import ProductCart from './Components/ProductCart/ProductCart';
import SkillCart from './Components/SkillCart/SkillCart';
import ContentText from './Components/ContentText';
import { useState } from 'react';
import Contact from './Components/Contact/Contact';

let Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    const project = [
        {id:'1', images:'hi', title:'Названия', link:"/", skill:['react', 'js', 'figma']},
        {id:'2', images:'hi', title:'Названия', link:"/", skill:['react', 'js', 'figma']},
        {id:'3', images:'hi', title:'Названия', link:"/", skill:['react', 'js', 'figma']},
        {id:'4', images:'hi', title:'Названия', link:"/", skill:['react', 'js', 'figma']},
    ];
    const skill = [
        {id:'1', name:'react', proggres:'78', bgcolor:'#291A7D'},
        {id:'2', name:'redux', proggres:'85', bgcolor:'#741F93'},
        {id:'3', name:'js', proggres:'78', bgcolor:'#CE9634'},
        {id:'4', name:'css', proggres:'87', bgcolor:'#8D2058'},
        {id:'5', name:'html', proggres:'93', bgcolor:'#057672'},
        {id:'6', name:'Figma', proggres:'65', bgcolor:'#3E3E3E'},
        {id:'7', name:'GITHUB', proggres:'51', bgcolor:'#646464'},
        {id:'8', name:'GIT', proggres:'49', bgcolor:'#0F6C15'},
    ]
    const about = [
        <><strong>Frontend-разработчик.</strong> Программированием увлечен со школы, прошел путь от классической верстки до современного стека. Специализируюсь на <strong>React, Redux, JavaScript, HTML и CSS</strong>. Уверенно взаимодействую с бэкендом через <strong>Fetch API (REST API)</strong>, пишу базовые <strong>SQL-запросы</strong>. Также есть практический опыт создания тем для <strong>WordPress</strong> на фрилансе. Быстро обучаюсь, погружаю в задачи с головой и умею доводить код до рабочего результата.</>,
        <><strong>Опыт в разработке</strong>: Увлекаюсь программированием с 9 класса, застал эволюцию веб-разработки от табличной верстки до компонентного подхода.</>,
        <><strong>Взаимодействие с данными</strong>: Работа с серверным API через Fetch API (REST), написание базовых SQL-запросов.</>,
        <><strong>Дополнительно</strong>: Опыт коммерческого/фриланс-опыта создания и кастомизации тем для WordPress.</>,
        <><strong>О себе</strong>: Умею разбираться в чужом коде, самостоятелен в решении задач, открыт к изучению новых инструментов.</>,
    ]
    return(
        <>
            <div>
                <header id="header">
                    <div className={s.top}>
                        <div className={s.logo}>Vitalii Hudovych</div>
                        <nav>
                            <div className={`${s.burger} ${isOpen ? s.active :''}`} onClick={toggleMenu}><span></span></div>
                            <ul className={isOpen ? s.active : ''}>
                                <li><HashLink smooth to="/#header" onClick={toggleMenu}>Главная</HashLink></li>
                                <li><HashLink smooth to="/#portfolio" onClick={toggleMenu}>Портфолио</HashLink></li>
                                <li><HashLink smooth to="/#skill" onClick={toggleMenu}>Skill</HashLink></li>
                                <li><HashLink smooth to="/#about" onClick={toggleMenu}>Обо мне</HashLink></li>
                                <li><HashLink smooth to="/#contact" onClick={toggleMenu}>Контакты</HashLink></li>
                            </ul>
                        </nav>
                    </div>
                    <div className={s.heaedr}>
                        <div className={s.title}>
                            Frontend-разработчик Создатель интерфейсов
                        </div>
                        <div className={s.description}>
                            Короткий подзаголовок: 2–3 предложения о том, кто ты, с чем работаешь (React, Next.js, TypeScript) и какова твоя цель.
                        </div>
                    </div>
                    <div className={s.section}>
                        {/* <button>Смотреть проекты</button> */}
                        <HashLink smooth to="/#contact" className={s.button}>Связаться</HashLink>
                    </div>
                </header>
                <Title id="portfolio" text="Портфолио"/>
                <Section>
                    {project.map((item)=>{
                        return(
                            <ProductCart 
                                index = {item.id} 
                                images={item.images} 
                                title={item.title} 
                                link={item.link} 
                                skill={item.skill}
                            />
                        );
                    })}
                </Section>
                <Title id="skill" text="Skill"/>
                <Section>
                    {skill.map((item)=>(
                        <SkillCart 
                            key={item.id}
                            index={item.id} 
                            name={item.name} 
                            proggres={item.proggres} 
                            bgcolor={item.bgcolor}
                        />
                    ))}
                </Section>
                <Title text="Обо мне" id="about"/>
                <Section>
                    <ContentText content={about}/>
                </Section>
                <Title id="contact" text="Контакты"/>
                <Section color="#D4B300">
                    <Contact />
                </Section>
            </div>
        </>
    )
}

export default Home;