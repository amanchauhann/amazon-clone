import './Subtotal.css'
import CurrencyFormat from 'react-currency-format';

function Subtotal() {
    return (
        <div className='subtotal'>
            <CurrencyFormat
            renderText={(value) => (
                <>
                    <p>
                        Subtotal (0 item): <strong>0</strong>
                    </p>
                    <small className='subtotal__gift'>
                        <input type={"checkbox"} />This contains a gift
                    </small>
                </>
            )}
            decimalScale={2}
            value={0}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            />

            <button>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal;
