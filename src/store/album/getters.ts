import { GetterTree } from 'vuex';
import { AlbumState } from './types';
import { RootState } from '../types';

export const getters: GetterTree<AlbumState, RootState> = {
  getPhotos(state): any {
    return state.photos;
  },
  getStared(state): any {
    return state.stared;
  },
};
