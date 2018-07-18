import { Module } from 'vuex';
import { actions } from './actions';
import { getters } from './getters';
import { mutations } from './mutations';
import { AlbumState } from './types';
import { RootState } from '../types';

export const state: AlbumState = {
  photos: [],
  stared: [],
};

const namespaced: boolean = true;

export const album: Module<AlbumState, RootState> = {
  namespaced,
  state,
  actions,
  getters,
  mutations,
};
