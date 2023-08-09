import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [btc, setBtc] = useState(0);
  const [btcQty, setBtcQty] = useState(0);
  const [doge, setDoge] = useState(0);
  const [dogeQty, setDogeQty] = useState(0);
  const [ripple, setRipple] = useState(0);
  const [rippleQty, setRippleQty] = useState(0);

  const calculateAmount = (price, qty) => {
    return price * Number(qty);
  }

  const totalAmount = (25000 * btcQty) + (0.75 * dogeQty) + (1.5 * rippleQty);

  return (
    <div className="App">
      <div className="quantities">
        <div className='container'>
          <div className='BTC-BOX'>
            <div className='box-text'>
              <p>BTC</p>
              <p>$25000</p>
            </div>
          </div>
          <div className='qty-add-button'>
            <input className='qty' value={btcQty} onChange={(e) => setBtcQty(e.target.value)} />
            <button className='add' onClick={() => setBtc(calculateAmount(25000, btcQty))}>ADD</button>
          </div>
        </div>
        <div className='container'>
          <div className='BTC-BOX'>
            <div className='box-text'>
              <p>DOGE</p>
              <p>$0.75</p>
            </div>
          </div>
          <div className='qty-add-button'>
            <input className='qty' value={dogeQty} onChange={(e) => setDogeQty(e.target.value)} />
            <button className='add' onClick={() => setDoge(calculateAmount(0.75, dogeQty))}>ADD</button>
          </div>
        </div>
        <div className='container'>
          <div className='BTC-BOX'>
            <div className='box-text'>
              <p>Ripple</p>
              <p>$1.5</p>
            </div>
          </div>
          <div className='qty-add-button'>
            <input className='qty' value={rippleQty} onChange={(e) => setRippleQty(e.target.value)} />
            <button className='add' onClick={() => setRipple(calculateAmount(1.5, rippleQty))}>ADD</button>
          </div>
        </div>
      </div>

      <div className='my-cart'>
        <h4>My cart</h4>

        <div className='cart-details'>
          <div className='coin'>COIN</div>
          <div className=''>QTY</div>
          <div className='amount'>AMOUNT</div>
        </div>

        {btcQty > 0 && (
          <div className='cart-details'>
            <div className='coin'>BTC</div>
            <div className=''>{btcQty}</div>
            <div className='amount'>{calculateAmount(25000, btcQty)}</div>
          </div>
        )}

        {dogeQty > 0 && (
          <div className='cart-details'>
            <div className='coin'>DOGE</div>
            <div className=''>{dogeQty}</div>
            <div className='amount'>{calculateAmount(0.75, dogeQty)}</div>
          </div>
        )}

        {rippleQty > 0 && (
          <div className='cart-details'>
            <div className='coin'>Ripple</div>
            <div className=''>{rippleQty}</div>
            <div className='amount'>{calculateAmount(1.5, rippleQty)}</div>
          </div>
        )}

        {totalAmount > 0 && (
          <div className='cart-details'>
            <div className='coin'>Total</div>
            <div className=''></div>
            <div className='amount'>{totalAmount}</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
