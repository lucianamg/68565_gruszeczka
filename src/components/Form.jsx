
export const Form = () => {
    return(
        <div>
            <h1 className="purchaseFormTitle">Completa el Formulario de compra</h1>
            <div className="purchaseFormContent"> 
                <form id="purchaseForm" className="purchaseForm">
                    <label htmlFor="email">E-mail</label>
                    <input name="email" type="email" className="formField" placeholder="Ingresa tu email para que podamos contactarte" required />
                    <label htmlFor="name">Nombre</label>
                    <input type="text" name="name" className="formField" placeholder="Ingresa tu nombre como figura en la tarjeta" required/>
                    <label htmlFor="address">Dirección de envío</label>
                    <textarea className="formField" name="address" placeholder="Escribe tu dirección completa..." minLength={40} required></textarea>
                    <label htmlFor="tarjeta">Datos de la tarjeta</label>
                    <textarea className="formField" name="card" placeholder="Escribe los 16 numeros de la tarjeta..." minLength={15} required></textarea>
                    <label htmlFor="vencimiento">Vencimiento</label>
                    <textarea className="formField" name="expiration" placeholder="Escribe la fecha de vencimiento como MMAA" minLength={4} required></textarea>
                    <label htmlFor="CVC">Codigo que figura en el dorso</label>
                    <textarea className="formField" name="cvcCode" placeholder="Escribe el codigo de 3 o 4 numeros que figura en el dorso" minLength={3} required></textarea>
                </form>
            </div>
        </div>
    )
}
export default Form;

//en react no se usa for en los forms sino htmlFor
// los input aca no se cierran con la misma etiqueta sino solo con />
// <input type="email" className="formField" placeholder="tu email" required />