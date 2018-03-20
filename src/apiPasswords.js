let fs = require('fs');
module.exports = JSON.parse(fs.readFileSync('credentials.json', 'utf8'));

// teamcity: {
//   username: 'dashboard',
//     password: '',
// },
// backoffice: {
//   username: 'dashboard',
//     password: '',
// },
