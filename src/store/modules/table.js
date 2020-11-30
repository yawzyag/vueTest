import DataJson from "@/assets/dummyData/data.json";

const state = {
    dataTable: [],
    searchValue: '',
    searchItem: null,
}

const getters = {
    getDataTable: (state) => state.dataTable,
    getSearchValue: (state) => state.searchValue,
    getSearchItem: (state) => state.searchItem,
}

const actions = {
    fetchDataTable({ commit }) {
        const data = DataJson.codes.slice(1100, 1300);
        commit('setDataTable', data)
    },
    searchInTable({ commit }, search) {
        commit('setSearchItem', search)
    }
}

const mutations = {
    setDataTable: (state, data) => state.dataTable = data,
    setSearchItem: (state, search) => {
        state.searchValue = search;
        if (search && search !== "false")
            state.searchItem = DataJson.codes[DataJson.codes.length - 1];
        else
            state.searchItem = null;
    }
}

export default { state, getters, actions, mutations }