import ItemListContainer from './ItemListContainer';
import { Button } from './Button';
import { ButtonsTest } from './ButtonsTest';

function MainSection (){
    return (
        <main className="mainSection">
            <section className="firstSection">
                <div>
                    <h1>...Te damos la bienvenida a Atempo Market!</h1>
                    <ItemListContainer />
                    <ButtonsTest />
                    
                </div>
                <div>
                    <h1>Otro Titulo</h1>
                    <p>No te olvides de regar las plantas</p>
                    <img src="riego.png" alt="algo" />
                    <Button 
                    content="ver mas"
                    />
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
