import { useState } from "react"
    
function App() {
  const [uppercase, setUppercase] = useState(false)
  const [lowercash, setLowercash] = useState(false)
  const [number, setNumber] = useState(false)
  const [sumbol, setSumbol] = useState(false)

  return (
    <div className="bg-slate-700 w-screen h-screen flex justify-center items-center p-4">
      <div className="max-w-[500px] md:w-[500px] h-[500px] bg-slate-800/80 rounded-md p-8">

          {/* main dive */}
          <div className="">
            <h2 className="text-white/70 text-center text-2xl font-extralight">Password Generator</h2>

            <div className="flex gap-2 mt-8 text-white/80 font-semibold">
              <input className="basis-4/5 px-3 rounded-sm bg-gray-500 border-none outline-none" type="text" readOnly/>
              <button className="basis-1/5 bg-slate-500 p-1 rounded-sm">Copy</button>
            </div>

            {/* Password Lenth */}
            <div className="flex  justify-between mt-6">
              <label className="text-white/80 text-xl font-semibold">Password Length</label>
              <input type="number" className="max-w-16 border-none outline-none rounded-sm bg-gray-500 p-1" min={8} max={50}/>
            </div>

            {/* Upper Cash */}
            <div className="flex  justify-between mt-6">
              <label className="text-white/80 text-xl font-semibold">Upper Cash</label>
              <div className="flex gap-8 items-center">
                <p className="bg-gray-500 px-2 rounded-md">ABCD</p>
                <input type="checkbox"  checked={uppercase} onChange={() => setUppercase(!uppercase)}  />
              </div>
            </div>

            {/* lower Cash */}
            <div className="flex  justify-between mt-6">
              <label className="text-white/80 text-xl font-semibold">Lower Cash</label>
              <div className="flex gap-8 items-center">
                <p className="bg-gray-500 px-2 rounded-md">abcd</p>
                <input type="checkbox" checked={lowercash} onChange={() => setLowercash(!lowercash)}  />
              </div>
            </div> 

            {/* Number Cash */}
            <div className="flex  justify-between mt-6">
              <label className="text-white/80 text-xl font-semibold">Number</label>
              <div className="flex gap-8 items-center">
                <p className="bg-gray-500 px-2 rounded-md">1234</p>
                <input type="checkbox" checked={number} onChange={() => setNumber(!number)}  />
              </div>
            </div>

            {/* Symbol Cash */}
            <div className="flex  justify-between mt-6">
              <label className="text-white/80 text-xl font-semibold">Sumbol</label>
              <div className="flex gap-8 items-center">
                <p className="bg-gray-500 px-2 rounded-md">!@#*?&</p>
                <input type="checkbox" checked={sumbol} onChange={() => setSumbol(!sumbol)}  />
              </div>
            </div>

            <div className="mt-8">  
              <button className="hover:bg-slate-600 hover:text-purple-300 hover:border-purple-300 hover:border-2 bg-gray-900 w-full text-white/80 p-2 font-semibold text-xl rounded-sm">Generator Unick Password</button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default App
