import React from 'react'

const Table = ({ props }: any) => {

  //console.log(props.rows.slice(1))

  return (
    <div className="overflow-x-auto border-x border-t">
      <table className="table-auto w-full">
        <thead className="border-b">
          <tr className="bg-gray-100">
            {
              props.rows[0].cells.map((el: any) => (
                <th className="text-left p-4 font-medium" key={el._key}>
                  {el}
                </th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {
            props.rows.slice(1).map((element: any) => (
              <tr className="border-b hover:bg-gray-50" key={element._key}>
                {
                  element.cells.map((cell: any, i: any) => (
                    <td className="p-4" key={i}>
                      {cell}
                    </td>
                  ))
                }
              </tr>
            ))
          }
          {/* <tr className="border-b hover:bg-gray-50">
            <td className="p-4">
              Prof. Lucie Waters
            </td>
            <td className="p-4">
              basic@example.com
            </td>
            <td className="p-4">
              Administrator
            </td>
          </tr> */}
        </tbody>
      </table>
    </div>
  )
}

export default Table