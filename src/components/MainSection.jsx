import ItemListContainer from './ItemListContainer';



function MainSection (){
    return (
        <main className="mainSection">
            <section className="firstSection">
                <div>
                    <h1>Te damos la bienvenida a Atempo Market!</h1>
                    <ItemListContainer />
                </div>
            </section>
        </main>
    );
}
export default MainSection;
