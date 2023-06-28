import Table from "./Table";
import {GoArrowSmallDown, GoArrowSmallUp} from 'react-icons/go'
import useSort from "../hooks/use-sort";

function SortableTable(props){

    const {config, data} = props;
    const {sortBy, sortOrder, sortedData, setSortColumn} = useSort(data, config);

    const updatedConfig = config.map((column) => {
        if(!column.sortValue){
            return column;
        }
        return {
            ...column,
            header: () => (
                <th className="cursor-pointer hover:bg-gray-100" onClick={() => setSortColumn(column.label)}>
                    <div className="flex items-center">
                        {getIcons(column.label, sortBy, sortOrder)}
                        {column.label}
                    </div>
                </th>
                )
        };
    })

    const getIcons = (label, sortBy, sortOrder) => {
        if(label !== sortBy){
            return (<div>
                <GoArrowSmallUp/>
                <GoArrowSmallDown/>
            </div>);
        }

        if(sortOrder === null){
            return (<div>
                <GoArrowSmallUp/>
                <GoArrowSmallDown/>
            </div>);;
        }
        else if(sortOrder === 'asc'){
            return (<div>
                <GoArrowSmallUp/>
            </div>);
        }
        else if(sortOrder === 'desc'){
            return (<div>
                <GoArrowSmallDown/>
            </div>);
        }
    }

    // Only sort data id sortOrder && sortBy are not null
    // Make a copy of the 'data' prop
    // Find the correct sortValue function and use it for sorting

    return (
        <div>
            <Table {...props} data={sortedData} config={updatedConfig}/>
        </div>
        )
}

export default SortableTable;