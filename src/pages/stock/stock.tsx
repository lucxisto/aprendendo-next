import Header from "@/components/Header";
import { useRouter } from "next/router";
import { useState } from "react";

const stock = () => {
    const [quantity, setQuantity] = useState(0);

    const increaseQuantity = () =>{
        const counter = quantity + 1;
        setQuantity(counter)
    }

    const decreaseQuantity = () =>{
        const counter = quantity - 1;
        setQuantity(counter)
    }

    return(
        <>
            <Header />
            <div className="flex justify-evenly">
                <div>
                    <h1>Coca-cola</h1>
                    <img src="https://placehold.co/100" alt="" />
                    <p>quantidade:
                        <button onClick={decreaseQuantity}>
                            -
                        </button> 
                        {quantity} 
                        <button onClick={increaseQuantity}>
                            +
                        </button></p>
                    <p>preço: R$ 6,00</p>
                </div>
            
            </div>
        </>
    );
};
export default stock;