import Link from "next/link";
interface Props {
    name: string;
    surname: string;
}

const Header = (props: Props) => {
    const { name, surname } = props;
    return(
        <header >
            <div className="flex justify-evenly items-center bg-zinc-300 font-bold h-[100px] py-20">
                <h1>Hello World!</h1>
                <img src="/logo.png" alt="logo" className="h-40 bg-black rounded-[100%]" />
                <h2>Welcome Mr. {`${surname}, ${name}`}</h2>
            </div>
            <div className="flex justify-evenly items-center">
                <Link href={"/"}>HOME</Link>
                <Link href={"/orders/orders"}>PEDIDOS</Link>
                <h3>PEDIDOS</h3>
                
            </div>
        </header>
   );
};
export default Header;