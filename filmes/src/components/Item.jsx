
export function Item(props) {

    return(
        <div className="item">
            <a href="#">
                <img
                key={props.id}
                src={props.image}
                alt="Describe Image" />
                 <h1 className="absolute bottom-1 left-2 text-white text-[2vh]">
                    {props.nome}
                </h1>
            </a>
        </div>
    )
}