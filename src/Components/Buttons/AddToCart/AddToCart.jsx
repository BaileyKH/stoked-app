import './AddToCart.css'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AddToCart = () => {
    const notify = () => {
        toast("👍 686 Snowboarding Jacket added to cart!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark"
        });
    };

    return(
        <div className="addTC-btn">
            <button onClick={notify}>Add to Cart</button>
        </div>
    );
}