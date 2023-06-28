import { Fragment } from "react"

function Table({ data, config, keyFn }){

    const renderedHeaders = config.map((column) => {
        return column.header ? <Fragment key={column.label}>{column.header()}</Fragment> : <th key={column.label}>{column.label}</th>
    })

    const renderedRows = data.map((rowData) => {
        return (
            <tr className="border-b" key={keyFn(rowData)}>
                {config.map((column) => {
                    return <td key={column.label}>{column.render(rowData)}</td>
                })}
            </tr>
        )
    })

    return (
    <table className="table-auto border-spacing-2">
        <thead>
            <tr className="border-b-2">
                {renderedHeaders}
            </tr>
        </thead>
        <tbody>
            {renderedRows}
        </tbody>
    </table>)
}

export default Table;