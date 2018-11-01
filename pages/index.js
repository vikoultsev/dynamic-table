import React from 'react'
import App from '../components/App'
import Head from '../components/Head'

const Home = () => (
  <div>
    <Head title='Home' />

    <div className='body'>
      <h1 className='title'>Optimum Solutions Assessment</h1>
      <App />
    </div><style jsx>{`
      .body {
        padding: 40px 40px 80px;
        color: #333;
        margin: 0 auto;
        width: 1260px;
        border: 1px solid #eee;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 20px;
        padding-bottom: 60px;
        line-height: 1.15;
        font-size: 32px;
        text-align: center;
      }
    `}</style>
  </div>
)

export default Home
