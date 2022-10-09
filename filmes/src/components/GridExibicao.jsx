
import { ItemFilme } from "./ItemFilme"
import { PlayerVideo } from "./PlayerVideo"


export function GridExibicao(props) {

    const openModal = () => props.setEstado(true);
   

    return(
        <section className="grid grid-cols-2 gap-2">            
            {props.filmes.map(filme => {
                return (
                    <div key={filme.id} onClick={() => props.setFilme(filme)} >
                        <div onClick={openModal}  >
                            <ItemFilme filme={filme} />
                        </div>                        
                    </div>
                )
            })}
        </section>    
    )
}