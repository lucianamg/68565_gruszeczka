import ItemListContainer from './ItemListContainer';

function MainSection (){
    return (
        <main className="mainSection">
            <section className="firstSection">
                <div>
                    <h1 style={{
                            backgroundColor: '#f2f2f2',
                            textAlign: 'center',
                            fontFamily: '"League Spartan", sans-serif',
                            fontSize: '2rem',
                        }}
                    >
                    Hola, Aqui está ListItemContainer con su estilo integrado:</h1>
                    <ItemListContainer greeting="Te damos la bienvenida a Atempo Market!"/>
                    <p style={{
                            backgroundColor: '#f2f2f2',
                            textAlign: 'center',
                            fontFamily: '"League Spartan", sans-serif',
                            fontSize: '2rem',
                        }}
                    >Lo puse grande para que se vea bien. Creo que el estilo me gusta mas ponerlo en el css</p>
                    
                </div>
                <div>
                    <h1>Otro Titulo</h1>
                    <p>No te olvides de regar las plantas</p>
                    <img src="riego.png" alt="algo" />
                </div>
            </section>
            <section className="secondSection">
                <div>
                    <h1>y ademas</h1>
                    <p> que les de un poco de sol</p>
                    <img src="luz-del-sol.png" alt="algo" />
                </div>
                <div>
                    <p>otro div</p>
                </div>
            </section>
        </main>
    );
}
export default MainSection;
