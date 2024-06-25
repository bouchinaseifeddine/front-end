import React from 'react'

export const Table = ({ children }) => {
    return (
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                {children}
            </table>
        </div>
    )
}

Table.Thead = ({ children }) => {
    return (
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            {children}
        </thead>
    )
}

Table.Tbody = ({ children }) => {
    return (
        <tbody>
            {children}
        </tbody>
    )
}

Table.Tr = ({ children }) => {
    return (
        <tr>
            {children}
        </tr>
    )
}

Table.Th = ({ children }) => {
    return (
        <th scope="col" className="px-6 py-3">
            {children}
        </th>
    )
}

Table.Tbody.Th = ({ children }) => {
    return (
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {children}
        </th>
    )
}

Table.Td = ({ children }) => {
    return (
        <td className="px-6 py-4">
            {children}
        </td>
    )
}
