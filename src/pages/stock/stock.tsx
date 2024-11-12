import Header from "@/components/Header";
import { useRouter } from "next/router";

const stock = () => {
         
    return(
        <>
            <Header />
            <div className="flex justify-evenly">
                <div>
                    <h1>Coca-cola</h1>
                    <img src="https://placehold.co/100" alt="" />
                    <p>quantidade: x</p>
                    <p>preço: R$ 6,00</p>
                </div>
                <div>
                    <h1>Coca-cola</h1>
                    <img src="https://placehold.co/100" alt="" />
                    <p>quantidade: x</p>
                    <p>preço: R$ 6,00</p>
                </div>
                <div>
                    <h1>Coca-cola</h1>
                    <img src="https://placehold.co/100" alt="" />
                    <p>quantidade: x</p>
                    <p>preço: R$ 6,00</p>
                </div>
                <div>
                    <h1>Coca-cola</h1>
                    <img src="https://placehold.co/100" alt="" />
                    <p>quantidade: x</p>
                    <p>preço: R$ 6,00</p>
                </div>
                <div>
                    <h1>Coca-cola</h1>
                    <img src="https://placehold.co/100" alt="" />
                    <p>quantidade: x</p>
                    <p>preço: R$ 6,00</p>
                </div>
            </div>
        </>
    );
};
export default stock;