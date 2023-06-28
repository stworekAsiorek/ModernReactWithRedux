import { useEffect, useRef, useState } from "react"
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

function Dropdown({options, value, onChange}){
    const divEl = useRef();
    const [isOpen, setIsOpen] = useState(false);


    useEffect(() =>
    {
        const handler = (event) => {
            if(!divEl.current)
            {
                return;
            }

            if(!divEl.current.contains(event.target))
            {
                setIsOpen(false);
            }
        }

        document.addEventListener('click', handler, true);

        return () => {
            document.removeEventListener('click', handler)
        }

    }, [])

    const handleOptionClick = (option) => {
        setIsOpen(false);
        onChange(option);
    }

    return (
    <div ref={divEl} className="w-48 relative">
        <Panel className="flex justify-between items-center curson-pointer" onClick={() => setIsOpen(!isOpen)}>
            { value?.label || "Select..." }
            <GoChevronDown/>
        </Panel>
        {isOpen && (
            <Panel className="absolute top-full">
                {options.map((option) => <div className="hover:bg-sky-100 rounded cursor-pointer p-1" key={option.value} onClick={() => handleOptionClick(option)}>{option.label}</div>)}
            </Panel>
            )}
    </div>
    )
}

export default Dropdown