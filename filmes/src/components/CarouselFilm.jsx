import '../styles/Film.scss';
import { Item } from './Item';

export function CarouselFilm(props) {

    const openModal = () => props.setEstado(true);

    return (
        <div className="wrapper">

        <section id="section1">
            {/* <a href="#section3" className="arrow__btn left-arrow">‹</a> */}
            {props.top5.map(film => {
                return (
                    <div key={film.id} onClick={() => props.setFilme(film)}>
                        <div key={film.id} onClick={openModal}>                      
                            <Item                   
                                key={film.id}
                                image = {film.foto}
                                nome={film.titulo}
                            />
                        </div>
                    </div>
                    
                )
            })}

            
           
           
            {/* <a href="#section2" className="arrow__btn right-arrow">›</a> */}
        </section>

        </div>
    )
}