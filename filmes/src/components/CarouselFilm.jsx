import '../styles/Film.scss';
import { Item } from './Item';

export function CarouselFilm(props) {

    function register() {
        props.setEstado(true);
    }

    return (
        <div className="wrapper">

        <section id="section1">
            {/* <a href="#section3" className="arrow__btn left-arrow">‹</a> */}
            {props.top5.map(film => {
                return (
                    <Item
                    onClick={register}                    
                    key={film.id}
                    image = {film.image}
                    nome={film.nome}/>
                )
            })}

            
           
           
            {/* <a href="#section2" className="arrow__btn right-arrow">›</a> */}
        </section>

        </div>
    )
}