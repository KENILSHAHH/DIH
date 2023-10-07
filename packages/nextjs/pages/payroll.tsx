import React, { useState } from 'react'

function payroll() {
     const [inputs, setInputs] = useState([""]);

  // Function to handle adding a new input field
    const addInput = (e:any) => {
        e.preventDefault();
    setInputs([...inputs, ""]);
  };

  // Function to handle input changes
  const handleInputChangee = (index: any, value: any) => {
    const updatedInputs = [...inputs];
    updatedInputs[index] = value;
    setInputs(updatedInputs);
  };

  // Function to handle removing an input field
  const removeInput = (index: any) => {
    const updatedInputs = [...inputs];
    updatedInputs.splice(index, 1);
    setInputs(updatedInputs);
  };
    return (
         <div>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <h1 style={{ display: "flex", justifyContent: "center", justifyItems: "center", fontSize: "30px" }}>
          Payroll
        </h1>
        <form style={{ display: "flex", justifyContent: "center", justifyItems: "center" }}>
          <div>
            <div
              className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-1"
              style={{
                border: "1px solid #000000",
                borderRadius: "10px", // Adjust this value to control the roundness
                padding: "10px",
              }}
            >
             <div className="p-4">
                {inputs.map((input, index) => (
                  <div key={index} className="flex items-center mb-2">
                    <input
                      type="text"
                      placeholder="Enter Address"
                      value={input}
                      onChange={e => handleInputChangee(index, e.target.value)}
                      className="w-64 p-2 border rounded-md mr-2"
                        />
                        <input
                      type="text"
                      placeholder="ETH"
                      value={input}
                      onChange={e => handleInputChangee(index, e.target.value)}
                      className="w-16 p-2 border rounded-md mr-2"
                    />
                    <button onClick={() => removeInput(index)} className="px-3 py-2 bg-red-500 text-white rounded-md">
                      Remove
                    </button>
                  </div>
                ))}
                <button onClick={addInput} className="px-3 py-2 bg-blue-500 text-white rounded-md">
                  Add Input
                </button>
              </div>
              

              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Send the amount to all users in a single click
              </button>
            </div>
          </div>
        </form>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
    //     <>
                
    //   <div className="p-4 text-center" style={{ margin : "100px", marginLeft:"500px"}}>

    //             {inputs.map((input, index) => (
    //               <div key={index} className="flex items-center mb-2">
    //                 <input
    //                   type="text"
    //                   placeholder="Enter Secondary Address"
    //                   value={input}
    //                   onChange={e => handleInputChangee(index, e.target.value)}
    //                   className="w-64 p-2 border rounded-md mr-2"
    //                 />
    //                 <button onClick={() => removeInput(index)} className="px-3 py-2 bg-red-500 text-white rounded-md">
    //                   Remove
    //                 </button>
    //               </div>
    //             ))}
    //             <button onClick={addInput} className="px-3 py-2 bg-blue-500 text-white rounded-md">
    //               Add Input
    //             </button>
    //         </div>
    //         </>
  )
}

export default payroll