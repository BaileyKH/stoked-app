import { useState } from 'react'

import './Size.css'

export const Size = () => {
    const [selected, setSelected] = useState(0);
    const options = ["Small", "Medium", "Large", "XL"];

    return(
        <div>
            <h4 className="size-title">Size</h4>
            {options.map((option, index) => (
              <button
                key={index}
                className={`segment ${selected === index ? "selected" : ""}`}
                onClick={() => setSelected(index)}
              >
                {option}
              </button>
            ))}
        </div>
    );
}
