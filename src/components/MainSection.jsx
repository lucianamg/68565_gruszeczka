import ItemListContainer from './ItemListContainer';
import { Button } from './Button';
import { ButtonsTest } from './ButtonsTest';

function MainSection (){
    return (
        <main className="mainSection">
            <section className="firstSection">
                <div>
                    <h1>Te damos la bienvenida a Atempo Market!</h1>
                    <ItemListContainer />
                    <ButtonsTest />
                </div>
            </section>
        </main>
    );
}
export default MainSection;
