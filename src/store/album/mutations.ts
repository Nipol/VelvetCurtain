import { MutationTree } from 'vuex';
import { AlbumState } from './types';
import { getFileList, PinAdd, AddPhotoToAlbum, InitializeAlbum, InitializeStared } from '../../utils/getJSIPFS';

export const mutations: MutationTree<AlbumState> = {
  async initializeAlbum(state) {
    await InitializeAlbum();
  },
  async initializeStared(state) {
    await InitializeStared();
  },
  async loadPhotos(state) {
    state.photos = await getFileList();
  },
  async loadStared(state) {
    state.stared = await getFileList('Stared');
  },
  async pinPhoto(state, payload) {
    await PinAdd(payload);
  },
  async AddPhotoToAlbum(state, payload) {
    await AddPhotoToAlbum(payload.filename, payload.file);
  },
};
