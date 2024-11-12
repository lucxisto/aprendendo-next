import OrderCard from "./OrderCard";

const OrdersWall = () => {
    return(
        <div className="flex justify-evenly">
            <OrderCard customerName="Guilherme" totalOrderValue={12.50} isPaid={true}/>
            <OrderCard customerName="Filipe" totalOrderValue={8.00} isPaid={false}/>
            <OrderCard customerName="Geraldo" totalOrderValue={16.00} isPaid={true}/>
            <OrderCard customerName="David" totalOrderValue={24.00} isPaid={false}/>
        </div>
    );
};

export default OrdersWall;