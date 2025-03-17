export const Button = (props) => {
    return (
        <button className="btn">
            {props.content}
        </button>
    )
    /* 
    Creo un componente boton y lo defino así:
    export const Button = (props) => {
    return (
        <button className="btn">
            {props.content}
        </button>
    )
    puedo acceder a las props de este objeto 
    con objeto.propiedad >> props.content en este caso 
    con ese props.content le estaré diciendo que muestre el contenido 
    que le ponga donde lo implemento.
    Para implementarlo, en donde sea que lo quiero poner (otro componente)
    escribo así:
        <Button 
            content="ver mas"
        />
    */

   /*  otra forma de hacer esto seria asi: 
    en donde lo quiero mostrar pongo:
    <Button>
        <img src="" alt="" />
        <span>BotonX</span>
    </Button>
    o directamente <Button>BotonX</Button>

    y luego en el componente Button uso props.children en vez de objeto.propiedad :
    {props.children}

    Se usa más esta manera
 */
}