import { AppState } from "../AppState";
import { Gift } from "../models/Gift";
import { logger } from "../utils/Logger";
import { api } from "./AxiosService";

class GiftService {

  async getGifts() {
    const res = await api.get('api/gifts')
    logger.log('api called, returning to controller', res.data)
    AppState.gifts = res.data.map(gift => new Gift(gift))
  }

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