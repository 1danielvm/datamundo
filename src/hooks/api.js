import data from '../../db.json'

export const numberList = data.map(item => Number(item.Population))
if (numberList.length > 10) {
  numberList.length = 10
}

export const nameList = data.map(item => item.countryName)
if (nameList.length > 10) {
  nameList.length = 10
}
