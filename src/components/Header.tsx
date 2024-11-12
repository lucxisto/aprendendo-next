import { log } from "console";
import Link from "next/link";


const Header = () => {
   
    return(
        <header >
            <div className="flex justify-evenly items-center bg-zinc-300 font-bold h-[100px] py-20">
                <h1>Hello World!</h1>
                <img src="/logo.png" alt="logo" className="h-40 bg-black rounded-[100%]" />
                <h2>Welcome Mr. {`Xisto, Lucas`}</h2>
            </div>
            <div className="flex justify-evenly items-center">
                <Link href={"/"}>HOME</Link>
                <Link href={
                    {
                        pathname:"/orders/orders",
                        query: { 
                            customerName: 'Lucas',
                            surname: 'Xisto' }
                    }
                }>PEDIDOS</Link>
                <Link href={"/stock/stock"}>ESTOQUE</Link>
                
            </div>
        </header>
   );
};
export default Header;