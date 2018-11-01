import React, { PureComponent } from 'react'
import { indexBy, prop, last } from 'ramda'
import { Form as ReactFinalForm } from 'react-final-form'
import LineChart from './LineChart'
import PieChart from './PieChart'
import Table from './Table'
import TransactionForm from './TransactionForm'
import { users, companies, payLaTransactions } from '../data'
import formValidationRules from '../utils/formValidationRules'

const indexById = indexBy(prop('id'))

export default class App extends PureComponent {
  state = {
    usersById: indexById(users),
    companiesById: indexById(companies),
    transactions: payLaTransactions,
    nextTransactionId: 1009,
  }

  getChartsData = () => {
    const { transactions, companiesById } = this.state
    const transactionsByCompany = transactions
      .reduce((acc, transaction) => {
        const { company: { id: companyId } } = transaction

        return {
          ...acc,
          /* eslint-disable max-len */
          [companyId]: companyId in acc ? [ ...acc[companyId], transaction ] : [ { ...transaction, amount: 0 }, transaction ],
        }
      }, {})

    const maxLength = Object.keys(transactionsByCompany).reduce((acc, companyId) => {
      const companyTransactionsLength = transactionsByCompany[companyId].length

      if (companyTransactionsLength > acc) {
        return companyTransactionsLength
      }

      return acc
    }, 0)

    const lineChartDatasets = Object.keys(transactionsByCompany).reduce((acc, companyId) => {
      const companyTransactions = transactionsByCompany[companyId]
      const company = companiesById[companyId]

      return [
        ...acc,
        {
          label: company.title,
          fill: false,
          backgroundColor: '#fff',
          borderColor: company.color,
          data: companyTransactions.reduce((memo, { amount }) => {
            return [ ...memo, last(memo) ? Number(last(memo)) + Number(amount) : Number(amount) ]
          }, []),
        },
      ]
    }, [])

    const lineChartLabels = Array.from(Array(maxLength).keys())

    const pieChartData = Object.keys(transactionsByCompany).reduce((acc, companyId) => {
      const companyTransactions = transactionsByCompany[companyId]
      const company = companiesById[companyId]
      const totalAmount = companyTransactions.reduce((memo, { amount }) => Number(memo) + Number(amount), 0)

      return {
        ...acc,
        labels: [ ...acc.labels, company.title ],
        datasets: [{
          data: [ ...acc.datasets[0].data, totalAmount ],
          backgroundColor: [ ...acc.datasets[0].backgroundColor, company.color ],
          hoverBackgroundColor: [ ...acc.datasets[0].hoverBackgroundColor, company.highlightcolor ],
        }],
      }

    }, {
      labels: [],
      datasets: [{
        data: [],
        backgroundColor: [],
        hoverBackgroundColor: [],
      }],
    })

    return {
      lineChartData: { datasets: lineChartDatasets, labels: lineChartLabels },
      pieChartData,
    }
  }

  handleSubmit = values => {
    const { usersById, companiesById } = this.state
    this.setState({
      transactions: [
        ...this.state.transactions,
        {
          id: this.state.nextTransactionId,
          user: usersById[values.userId],
          company: companiesById[values.companyId],
          amount: values.amount,
        },
      ],
      nextTransactionId: this.state.nextTransactionId + 1,
    })
  }

  render() {
    const { transactions } = this.state
    const data = this.getChartsData()
    const hasTransactions = Boolean(transactions.length)

    return (
      <main>
        <div className='form'>
          <ReactFinalForm
            onSubmit={this.handleSubmit}
            validate={formValidationRules}
            component={TransactionForm}
            users={users}
            companies={companies}
          />
        </div>

        {!hasTransactions && <div className='message'>
          No transactions.
        </div>}



        {hasTransactions && <Table
          transactions={transactions}
        />}

        {hasTransactions && <div className='charts'>
          <div className='chart'>
            <LineChart data={data.lineChartData} />
          </div>
          <div className='chart'>
            <PieChart data={data.pieChartData} />
          </div>
        </div>}<style jsx>{`
          .form {
            margin-bottom: 40px;
            padding-bottom: 40px;
            border-bottom: 1px solid #eee;
          }

          .message {
            margin-top: 30px;
            font-size: 28px;
            text-align: center;
          }
          .charts {
            margin-top: 40px;
            padding-top: 40px;
            display: flex;
            justify-content: space-between;
            border-top: 1px solid #eee;
          }

          .chart {
            width: 50%;
            height: 300px;
          }
        `}</style>
      </main>
    )
  }
}
