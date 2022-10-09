
export function ItemFilme(props) {

    return (
        <div className="rounded-sm overflow-hidden">
            <a href="#" >
                <div className=" bg-netflix-red-500 opacity-90">
                    <h1 className="bottom-1 left-2 text-white font-bold text-[2vh]">
                        {props.filme.titulo}
                    </h1>     
                </div>       
                <img
                src={props.filme.foto}
                alt={props.filme.titulo} 
                />
                
            </a>
        </div>
    )    
}