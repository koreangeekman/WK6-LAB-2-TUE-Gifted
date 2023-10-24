import { AppState } from "../AppState";
import { logger } from "../utils/Logger";
import { api } from "./AxiosService";

class GiftService {

  async getGifts() {
    const res = await api.get()
    logger.log('api called, returning to controller')
    return res.data
  }

  async openGift(giftId) {
    const toBeOpened = AppState.gift.find(gift => gift.id == giftId)
    if (!toBeOpened) { throw new logger.error(); }
    toBeOpened.opened = true;
    logger.log('updated object?', AppState.gift)
    // const res = await api.put(`/${giftId}`, toBeOpened)
    // return res.data
  }

  async createGift(body) {
    const res = await api.post(body)
    return res.data
  }

  async removeGift(giftId) {
    const res = await api.delete(`/${giftId}`)
    return res.data
  }

}

export const giftService = new GiftService();