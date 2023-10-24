import { AppState } from "../AppState";
import { Gift } from "../models/Gift";
import { logger } from "../utils/Logger";
import { api } from "./AxiosService";

class GiftService {

  async getGifts() {
    const res = await api.get('api/gifts')
    AppState.gifts = res.data.map(gift => new Gift(gift))
  }

  // async getGiftsByPage(pageNum) {
  //   if (pageNum <= 0) {
  //     logger.error('invalid page number request')
  //   }
  //   AppState.currentPage = pageNum;
  //   const res = await api.get(`api/gifts?page=${pageNum}`)
  //   AppState.gifts = res.data.map(gift => new Gift(gift))
  //   // logger.log('by page:', pageNum, 'at', `api/gifts?page=${pageNum}`, 'w/ returned array', AppState.gifts)
  // }

  // vv AUTHORIZATION REQUIRED BELOW vv

  async openGift(giftId) {
    const toBeOpenedIndex = AppState.gifts.findIndex(gift => gift.id == giftId);
    const toBeOpened = AppState.gifts[toBeOpenedIndex];
    if (!toBeOpened) { throw new logger.error('Gift not found') }
    toBeOpened.opened = true;
    const res = await api.put(`api/gifts/${giftId}`, toBeOpened);
    const openedGift = new Gift(res.data);
    AppState.gifts.splice(toBeOpenedIndex, 1, openedGift)
    return openedGift
  }

  async createGift(body) {
    const res = await api.post('api/gifts', body)
    const newGift = new Gift(res.data)
    AppState.gifts.push(newGift)
    return newGift
  }

  async removeGift(giftId) {

    const res = await api.delete(`api/gifts/${giftId}`)
    return res.data
  }

}

export const giftService = new GiftService();