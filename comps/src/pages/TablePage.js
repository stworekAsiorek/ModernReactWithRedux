import SortableTable from "../components/SortableTable";
import Table from "../components/Table";

function TablePage(){
    const data = [
        {
            name: 'Orange',
            color: 'bg-orange-500',
            score: 5
        },
        {
            name: 'Apple',
            color: 'bg-red-300',
            score: 3
        },
        {
            name: 'Banana',
            color: 'bg-yellow-500',
            score: 1
        },
        {
            name: 'Lime',
            color: 'bg-green-500',
            score: 4
        },
        {
            name: 'Cherry',
            color: 'bg-red-700',
            score: 2.5
        }
    ]

    const config = [
        {
            label: 'Name',
            render: (d) => d.name,
            sortValue: (d) => d.name
        },
        {
            label: 'Color',
            render: (d) => <div className={`p-2 m-3 ${d.color}`}/>
        },
        {
            label: 'Score',
            render: (d) => d.score,
            sortValue: (d) => d.score
        },
        {
            label: 'Score Squared',
            render: (d) => d.score ** 2,
            sortValue: (d) => d.score ** 2
        },
    ]

    const keyFn = (d) => {return d.name}

    return (
        <div>
            <Table data={data} config={config} keyFn={keyFn} />
            <SortableTable data={data} config={config} keyFn={keyFn} />
        </div>
    )
}

export default TablePage