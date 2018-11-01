import React from 'react'
import css from 'styled-jsx/css'

const tableHead = [{
  id: 'Transaction ID',
  user: { name: 'User Name' },
  company: { title: 'Payment Mode' },
  amount: 'Amount',
}]

const tableStyles = css.resolve`
  table {
    border-spacing: 1;
    border-collapse: collapse;
    background: white;
    border-radius: 10px;
    overflow: hidden;
    width: 100%;
    margin: 0 auto;
    position: relative;
  }
  table * {
    position: relative;
  }
  table td, table th {
    padding-left: 16px;
  }
  table thead tr {
    height: 50px;
    background: rgba(200, 200, 200, 0.5);
  }
  table thead td {
    font-weight: bold;
  }
  table tbody tr {
    height: 40px;
  }
  table tbody tr:last-child {
    border: 0;
  }
  table td, table th {
    text-align: left;
  }
  table td.l, table th.l {
    text-align: right;
  }
  table td.c, table th.c {
    text-align: center;
  }
  table td.r, table th.r {
    text-align: center;
  }


  .table100-head th{
    font-family: OpenSans-Regular;
    font-size: 18px;
    color: #fff;
    line-height: 1.2;
    font-weight: unset;
  }

  tbody tr:nth-child(even) {
    background-color: #f5f5f5;
  }

  tbody tr {
    font-family: OpenSans-Regular;
    font-size: 15px;
    color: #808080;
    line-height: 1.2;
    font-weight: unset;
  }

  tbody tr:hover {
    color: #555555;
    background-color: #f5f5f5;
    cursor: pointer;
  }
`

const renderRow = className => ({ id, user, company, amount }) => (
  <tr className={className} key={id}>
    <td className={className}>{id}</td>
    <td className={className}>{user.name}</td>
    <td className={className}>{company.title}</td>
    <td className={className}>{amount}</td>
  </tr>
)

function Table({ transactions }) {
  return (
    <table className={tableStyles.className}>
      <thead className={tableStyles.className}>
        {tableHead.map(renderRow(tableStyles.className))}
      </thead>
      <tbody className={tableStyles.className}>
        {transactions.map(renderRow(tableStyles.className))}
      </tbody>
      {tableStyles.styles}
    </table>
  )
}

export default Table
