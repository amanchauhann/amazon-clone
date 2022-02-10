import './Subtotal.css'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useNavigate } from 'react-router-dom';

function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();
    // console.log({basket})
    const navigate = useNavigate();

    return (
        <div className='subtotal'>
            <CurrencyFormat
            renderText={(value) => (
                <>
                    <p>
                        Subtotal ({basket.length} item): <strong>{value}</strong>
                    </p>
                    <small className='subtotal__gift'>
                        <input type={"checkbox"} />This contains a gift
                    </small>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            />

            <button onClick={e => navigate('/payment')}>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal;
