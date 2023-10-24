// const giftModel = {
//   "tag": {
//     "type": "String",
//     "maxLength": 120
//   },
//   "url": {
//     "type": "String",
//     "required": true,
//     "maxLength": 500
//   },
//   "opened": {
//     "type": "Boolean",
//     "default": false
//   },
//   "creatorId": {
//     "type": "ObjectId",
//     "required": true,
//     "ref": "Account"
//   }
// }

// const giftResponse = [
//   {
//     "_id": "652879a1489f6c08ba057211",
//     "tag": "<img src alt="🐶" onerror="setInterval(() => console.info('🐶woof!'), 3333)">",
//     "url": "https://media4.giphy.com/media/3o7527pa7qs9kCG78A/giphy-preview.gif?cid=4a9f3758coq0d52m1440gqe80j1r3l93dfa83riv9iedo85j&ep=v1_gifs_search&rid=giphy-preview.gif&ct=g",
//     "opened": true,
//     "creatorId": "652575a13cff8feb64c0f680",
//     "createdAt": "2023-10-12T22:56:33.968Z",
//     "updatedAt": "2023-10-13T04:03:54.230Z",
//     "__v": 0,
//     "id": "652879a1489f6c08ba057211"
//   }]

export class Gift {
  constructor(data) {
    this.id = data.id
    this.tag = data.tag
    this.url = data.url
    this.opened = data.opened || false
    this.creatorId = data.creatorId
  }
}