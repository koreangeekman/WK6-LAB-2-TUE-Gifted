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
    const toBeOpened = AppState.gift.find(gift => gift.id == giftId)
    if (!toBeOpened) { throw new logger.error(); }
    toBeOpened.opened = true;
    logger.log('updated object?', AppState.gift)
    // const res = await api.put(`api/gifts/${giftId}`, toBeOpened)
    // return res.data
  }

  async createGift(body) {
    const res = await api.post('api/gifts', body)
    return res.data
  }

  async removeGift(giftId) {
    const res = await api.delete(`api/gifts/${giftId}`)
    return res.data
  }

}

export const giftService = new GiftService();