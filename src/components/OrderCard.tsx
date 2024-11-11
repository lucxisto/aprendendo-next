interface Props {
    customerName: string;
    totalOrderValue: number;
    isPaid: boolean;
}

const OrderCard = (props: Props) => {
    const { customerName, totalOrderValue, isPaid } = props;
    return (
        <div className="flex flex-col items-center justify-evenly border-zinc-900 border-2 p-2 rounded">
            <h1>{customerName}</h1>
            <p>Valor Total: R$ {totalOrderValue}</p>
            {   
                isPaid?  (
                    <p>PAGO</p>
                ):(
                    <p>PENDENTE</p>
                )
            }
            <button>Editar Pedido</button>
        </div>
    );
};
export default OrderCard;