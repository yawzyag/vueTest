import gql from "graphql-tag";
import { apolloClient } from "../../grapqhl";

const isCoveredByExpress = gql`
  query getZipcodes($limit: Int, $skip: Int, $search: String) {
    getZipcodes(limit: $limit, skip: $skip, search: $search) {
      total
      zipcodes {
        id
        code
        city
        state
        nice_bounds
      }
    }
  }
`;

const state = {
  dataTable: [],
  searchValue: "",
  searchItem: null,
  loading: false,
  error: false,
  limit: 5,
  skip: 0,
  total: 0,
};

const getters = {
  getDataTable: (state) => state.dataTable,
  getSearchValue: (state) => state.searchValue,
  getSearchItem: (state) => state.searchItem,
  getLoadingState: (state) => state.loading,
  getErrorState: (state) => state.error,
  getTotal: (state) => state.total,
};

const actions = {
  async fetchDataTable({ commit, state }) {
    let zipcodes = [];
    state.loading = true;
    try {
      const { data } = await apolloClient.query({
        query: isCoveredByExpress,
        variables: {
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
      state.loading = false;
    }
    commit("setDataTable", zipcodes);
  },
  async searchInTable({ commit, state }, search) {
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
    commit("setSearchItem", { zipcode: zipcodes[0] || [], search });
  },
};

const mutations = {
  setDataTable: (state, data) => (state.dataTable = data),
  setSearchItem: (state, data) => {
    const { search, zipcode } = data;
    console.log("🚀 ~ file: table.js ~ line 55 ~ search", search);
    state.searchValue = search;
    state.searchItem = zipcode;
  },
};

export default { state, getters, actions, mutations };
