import { CurrencyDollarIcon } from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

function App() {

  const [bill, setBill] = useState(0)
  const [tipAmount, setTipAmount] = useState(0)
  const [total, setTotal] = useState(0)
  const [numberOfPeople, setNumberOfPeople] =  useState(1)
  const [error, setError] = useState(false)
  const [tip, setTip] = useState(0)

  const calculateBill = (amount: number) => {
    setTip(amount)
    setError(false)

    if (!numberOfPeople) {
      setError(true)
      return
    }

    const totalTip = (tip / 100) * bill
    const totalBill = bill + totalTip

    const totalPerPerson = totalBill / numberOfPeople
    const tipPerPerson = totalTip / numberOfPeople

    setTotal(totalPerPerson)
    setTipAmount(tipPerPerson)

  }

  function reset() {
    setTipAmount(0)
    setBill(0)
    setNumberOfPeople(1)
    setTip(0)
    setTotal(0)
  }


  return (
    <div className="App">
      <div className="bg-cyan-light-gray h-screen lg:flex lg:items-center lg:justify-center lg:flex-col">
        <div className="header py-5 h-[14%] lg:h-fit lg:py-0 lg:pb-8">
          <h1 className="uppercase font-bold text-cyan-dark-gray tracking-[.3em] text-xl text-center">Spli<br />tter</h1>
        </div>

        <div className="card bg-white overflow-hidden h-[86%] lg:h-fit lg:w-4/6 lg:mx-auto rounded-tr-3xl rounded-tl-3xl p-6
        lg:flex lg:justify-between lg:rounded-3xl
        ">
          
          <div className="left-side lg:w-1/2">
            <div className="bill-section mb-3">
              <h1 className="font-bold text-cyan-dark-gray text-xs">Bill</h1>
              <div className="mt-2 relative">
                <input 
                  value={bill}
                  onChange={(e) => setBill(parseInt(e.target.value))} 
                  type="number" className="form-control text-cyan-dark-gray text-right font-bold text-lg rounded-sm py-0 lg:py-1" />
                <CurrencyDollarIcon className="absolute inset-2 h-4 w-4 lg:h-6 lg:w-6 text-cyan-dark-gray" />
              </div>
            </div>
      
            <div className="bill-section my-3 lg:my-5">
              <h1 className="font-bold text-cyan-dark-gray text-xs">Select Tip %</h1>
        
              <div className="mt-2 grid grid-cols-2 lg:grid-cols-3 gap-3">
                <button onClick={() => calculateBill(5)} className="btn btn-primary text-lg">5%</button>
                <button onClick={() => calculateBill(10)} className="btn btn-primary text-lg">10%</button>
                <button onClick={() => calculateBill(15)} className="btn btn-primary text-lg">15%</button>
                <button onClick={() => calculateBill(25)} className="btn btn-primary text-lg">25%</button>
                <button onClick={() => calculateBill(50)} className="btn btn-primary text-lg">50%</button>
                <input onChange={(e) => calculateBill(parseInt(e.target.value))} type="number" className="form-control font-bold text-lg lg:text-xs text-right rounded-lg p-1" placeholder="Custom" />
              </div>
            </div>
      
            <div className="bill-section my-5 lg:my-6">
              <h1 className="font-bold text-cyan-dark-gray text-xs">Number of People</h1>
        
              <div className="mt-2 relative">
                {error ? <small v-if="error" className="text-xs text-red-500 absolute right-0 -top-4">Can't be zero</small> : null}
                <input
                value={numberOfPeople}
                onChange={(e) => setNumberOfPeople(parseInt(e.target.value))}
                type="number" className="form-control text-cyan-dark-gray text-right font-bold text-lg rounded-sm py-0 lg:py-2" />
                <UserIcon className="absolute inset-2 lg:inset-3 h-3 w-3 lg:h-6 lg:w-6 text-cyan-dark-gray" />
              </div>
            </div>
          </div>

          <div className="card bg-cyan-dark pt-6 pb-4 px-4 lg:px-6 lg:ml-5 rounded-lg lg:w-1/2 lg:flex lg:flex-col">

            <div>
              <div className="flex justify-between align-center mb-3 lg:mb-8">
                <div>
                  <h1 className="text-white font-semibold text-xs lg:text-md">Tip Amount</h1>
                  <span className="text-cyan-light-gray text-xs lg:text-md">/person</span>
                </div>
      
                <h1 className="font-bold text-xl text-primary lg:text-2xl">${tipAmount.toFixed(2)}</h1>
              </div>
      
              <div className="flex justify-between align-center">
                <div>
                  <h1 className="text-white font-semibold text-xs lg:text-md">Total</h1>
                  <span className="text-cyan-light-gray text-xs lg:text-md">/person</span>
                </div>
      
                <h1 className="font-bold text-xl text-primary lg:text-2xl">${total.toFixed(2)}</h1>
              </div>
            </div>

            <button onClick={reset} className="mt-auto btn btn-secondary w-full uppercase text-sm lg:text-lg">Reset</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App
