import { apolloClient } from '../../grapqhl';
import { isCoveredByExpress } from '../../grapqhl/querys/getZipcodesData';

const state = {
  dataTable: [],
  searchValue: '',
  searchItem: null,
  loading: false,
  loadingTable: false,
  error: false,
  limit: 10,
  skip: 0,
  total: 0,
};

const getters = {
  getDataTable: (state) => state.dataTable,
  getSearchValue: (state) => state.searchValue,
  getSearchItem: (state) => state.searchItem,
  getLoadingState: (state) => state.loading,
  getLoadingTableState: (state) => state.loadingTable,
  getErrorState: (state) => state.error,
  getTotal: (state) => state.total,
};

const actions = {
  async fetchDataTable({ commit, state }) {
    let zipcodes = [];
    state.loadingTable = true;
    try {
      const { data } = await apolloClient.query({
        query: isCoveredByExpress,
        variables: {
          search: state.searchValue,
          limit: state.limit,
          skip: state.skip,
        },
      });
      state.total = Math.ceil(data.getZipcodes.total / state.limit);
      zipcodes = data?.getZipcodes?.zipcodes;
    } catch (e) {
      console.info(e);
      state.error = true;
    } finally {
      state.loadingTable = false;
    }
    commit('setDataTable', zipcodes);
  },
  async searchInTable({ commit, state, dispatch }, search) {
    state.searchItem = null;
    let zipcodes = [];
    state.loading = true;
    try {
      const { data } = await apolloClient.query({
        query: isCoveredByExpress,
        variables: { search },
      });
      zipcodes = data?.getZipcodes?.zipcodes;
    } catch (e) {
      console.info(e, state);
      state.error = true;
    } finally {
      state.loading = false;
    }
    commit('setSearchItem', { zipcode: zipcodes[0] || [], search });
    dispatch('fetchDataTable');
  },
  changeSkip({ dispatch, state }, skip) {
    state.skip = skip * state.limit;
    dispatch('fetchDataTable');
  },
};

const mutations = {
  setDataTable: (state, data) => (state.dataTable = data),
  setSearchItem: (state, data) => {
    const { search, zipcode } = data;
    state.skip = 0;
    state.searchValue = search;
    state.searchItem = zipcode;
  },
};

export default { state, getters, actions, mutations };
