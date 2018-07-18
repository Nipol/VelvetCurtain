import { ActionTree } from 'vuex';
import { AlbumState } from './types';
import { RootState } from '../types';

export const actions: ActionTree<AlbumState, RootState> = {
  initializeAlbum({ commit }): any {
    commit('initializeAlbum');
  },
  initializeStared({ commit }): any {
    commit('initializeStared');
  },
  loadPhotos({ commit }): any {
    commit('loadPhotos');
  },
  loadStared({ commit }): any {
    commit('loadStared');
  },
  pinPhoto({ commit }, payload): any {
    commit('pinPhoto', payload);
  },
  getPhotoHash({ commit }): any {
    commit('getPhotoHash');
  },
  AddPhotoToAlbum({ commit }, payload): any {
    commit('AddPhotoToAlbum', payload);
  },
};
