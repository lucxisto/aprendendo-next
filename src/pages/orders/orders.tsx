import Header from "@/components/Header";
import OrderCard from "@/components/OrderCard";

const orders = () => {
    return(
        <div>
            <Header surname="Cláuiano" name="Felicio" />
            <div className="flex justify-evenly">
                <OrderCard customerName="Guilherme" totalOrderValue={12.50} isPaid={true}/>
                <OrderCard customerName="Filipe" totalOrderValue={8.00} isPaid={false}/>
                <OrderCard customerName="Geraldo" totalOrderValue={16.00} isPaid={true}/>
                <OrderCard customerName="David" totalOrderValue={24.00} isPaid={false}/>
                <OrderCard customerName="Guilherme" totalOrderValue={12.50} isPaid={true}/>
                <OrderCard customerName="Filipe" totalOrderValue={8.00} isPaid={false}/>
                <OrderCard customerName="Geraldo" totalOrderValue={16.00} isPaid={true}/>
                <OrderCard customerName="David" totalOrderValue={24.00} isPaid={false}/>
            </div>
        </div>
    );
};

export default orders;