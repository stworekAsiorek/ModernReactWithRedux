
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Section({index, item, isExpanded, onClick}){
    return (
        <div key={item.id}>
            <div className="flex justify-between p3 bg-gray-50 border-b items-center cursor-pointer" onClick={() => onClick(index)}>
                {item.label}
                <span className="text-2xl">{isExpanded ? <GoChevronDown /> : <GoChevronLeft/>}</span>
            </div>
            {isExpanded && <div className="border-b p-5">{item.content}</div>}
        </div>)
}

export default Section;