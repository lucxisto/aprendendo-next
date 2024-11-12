const OrderForm = () => {
    return (
        <form className="flex flex-col">
            <label>Cliente:</label> <input type="text" />

            <label>Produto
                <select name="product" id="">
                    <option value="cocacola">Coca-cola</option>
                    <option value="pingodeleite">Pingo de Leite</option>
                    <option value="fandangos">Fandangos</option>
                </select><button>Adicionar</button>
            </label>
        </form>
    );
};

export default OrderForm;