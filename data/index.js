export const users = [{
  id: 'user1',
  name: 'User A',
}, {
  id: 'user2',
  name: 'User B',
}, {
  id: 'user3',
  name: 'User C',
}]

export const companies = [{
  id: 'company1',
  title: 'American Express',
  color: 'rgba(255, 99, 132, 0.6)',
  highlightColor: 'rgba(255, 99, 132, 0.8)',
}, {
  id: 'company2',
  title: 'VISA',
  color: 'rgba(54, 162, 235, 0.6)',
  highlightColor: 'rgba(54, 162, 235, 0.8)',
}, {
  id: 'company3',
  title: 'DBS PayLa',
  color: 'rgba(153, 102, 255, 0.6)',
  highlightColor: 'rgba(153, 102, 255, 0.8)',
}]

export const payLaTransactions = [{
  id: 1001,
  user: users[1],
  company: companies[2],
  amount: 23,
}, {
  id: 1002,
  user: users[0],
  company: companies[2],
  amount: 43,
}, {
  id: 1003,
  user: users[1],
  company: companies[2],
  amount: 48,
}, {
  id: 1004,
  user: users[2],
  company: companies[2],
  amount: 12,
}, {
  id: 1005,
  user: users[0],
  company: companies[2],
  amount: 9,
}, {
  id: 1006,
  user: users[2],
  company: companies[2],
  amount: 54,
}, {
  id: 1007,
  user: users[1],
  company: companies[2],
  amount: 87,
}, {
  id: 1008,
  user: users[0],
  company: companies[2],
  amount: 78,
}]
