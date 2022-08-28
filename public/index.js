const reader = require('xlsx')

const file1 = reader.readFile('./public/inflation.xlsx')
const file2 = reader.readFile('./public/unemployment.xlsx')
const file3 = reader.readFile('./public/chartChart.xlsx')

// let data = []

// const sheets = file.SheetNames

// for(let i = 0; i < sheets.length; i++)
// {
// //    const temp = reader.utils.sheet_to_json(file.Sheets)
// //    console.log(temp)
// //    temp.forEach((res) => {
// //       data.push(res)
// //    })
// }
// console.log(data)
// console.log(data)
// const temp = reader.utils.sheet_to_json(file.sheets[])
// console.log(file.Sheets[file.SheetNames[0]])
console.log(reader.utils.sheet_to_json(file3.Sheets[file3.SheetNames], {header: 1}))