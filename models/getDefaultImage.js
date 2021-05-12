const baseURL = 'https://images.unsplash.com/photo-'
const barPics = ['1575444758702-4a6b9222336e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmFyfGVufDB8fDB8fA%3D%3D', '1572116469696-31de0f17cc34?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmFyfGVufDB8fDB8fA%3D%3D', '1516997121675-4c2d1684aa3e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJhcnxlbnwwfHwwfHw%3D']
const cafePics = ['1495474472287-4d71bcdd2085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8', '1497935586351-b67a49e012bf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8', '1442512595331-e89e73853f31?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8']
const midEastPics = ['1542528180-0c79567c66de?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fG1pZGRsZSUyMGVhc3Rlcm58ZW58MHx8MHx8', '1520252729650-ddced2015543?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODd8fG1pZGRsZSUyMGVhc3Rlcm58ZW58MHx8MHx8', '1590237581598-988d27565521?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI0fHxtaWRkbGUlMjBlYXN0ZXJufGVufDB8fDB8fA%3D%3D']
const americanPics = ['1555196301-ace64f260222?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGFtZXJpY2FuJTIwcmVzdGF1cmFudHxlbnwwfHwwfHw%3D', '1563245370-81fdd442d8d5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGFtZXJpY2FuJTIwcmVzdGF1cmFudHxlbnwwfHwwfHw%3D', '1599173687303-7e1eb50f1e60?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTZ8fGFtZXJpY2FuJTIwcmVzdGF1cmFudHxlbnwwfHwwfHw%3D', '1466978913421-dad2ebd01d17?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHJlc3RhdXJhbnR8ZW58MHx8MHx8']
const japanPics = ['1590577976322-3d2d6e2130d5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGphcGFuZXNlJTIwcmVzdGF1cmFudHxlbnwwfHwwfHw%3D', '1470256699805-a29e1b58598a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGphcGFuZXNlJTIwcmVzdGF1cmFudHxlbnwwfHwwfHw%3D', '1534604973900-c43ab4c2e0ab?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGphcGFuZXNlJTIwcmVzdGF1cmFudHxlbnwwfHwwfHw%3D']
const italianPics = ['1533777324565-a040eb52facd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGl0YWxpYW4lMjByZXN0YXVyYW50fGVufDB8fDB8fA%3D%3D', '1473093295043-cdd812d0e601?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGl0YWxpYW4lMjByZXN0YXVyYW50fGVufDB8fDB8fA%3D%3D', '1601556425608-98babdaa1bc7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fGl0YWxpYW4lMjByZXN0YXVyYW50fGVufDB8fDB8fA%3D%3D', '1414235077428-338989a2e8c0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D']
const otherPics = ['1555396273-367ea4eb4db5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHJlc3RhdXJhbnR8ZW58MHx8MHx8', '1550966871-3ed3cdb5ed0c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHJlc3RhdXJhbnR8ZW58MHx8MHx8', '1482275548304-a58859dc31b7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fHJlc3RhdXJhbnR8ZW58MHx8MHx8']

function getImage(category) {
  let image = otherPics[Math.floor(Math.random() * otherPics.length)]

  if (category.includes('酒吧')) {
    image = barPics[Math.floor(Math.random() * barPics.length)]
  }
  if (category.includes('咖啡')) {
    image = cafePics[Math.floor(Math.random() * cafePics.length)]
  }
  if (category.includes('中東')) {
    image = midEastPics[Math.floor(Math.random() * midEastPics.length)]
  }
  if (category.includes('日本')) {
    image = japanPics[Math.floor(Math.random() * japanPics.length)]
  }
  if (category.includes('義式')) {
    image = italianPics[Math.floor(Math.random() * italianPics.length)]
  }
  if (category.includes('美式')) {
    image = americanPics[Math.floor(Math.random() * americanPics.length)]
  }
  return baseURL + image
}

module.exports = getImage