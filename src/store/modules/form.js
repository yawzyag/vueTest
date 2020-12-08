import { apolloClient } from "../../grapqhl";
import { newCode } from "../../grapqhl/mutations/newCode";

const state = {
  newCode: {},
  loadingCode: false,
  errorCode: false,
};

const getters = {
  getLoadingCode: (state) => state.loadingCode,
  getErrorCode: (state) => state.errorCode,
};

const actions = {
  async sendNewCode({ commit, state }, newCodeObj) {
    state.loadingCode = true;
    const { city, code, email, state: stateToSend } = newCodeObj;

    try {
      await apolloClient.mutate({
        mutation: newCode,
        variables: {
          code,
          city,
          state: stateToSend,
          userEmail: email,
        },
      });
    } catch (e) {
      console.info(e);
      state.errorCode = true;
    } finally {
      state.loadingCode = false;
    }

    commit("setNewCode", newCodeObj);
  },
};

const mutations = {
  setNewCode: (state, data) => (state.newCode = data),
};

export default { state, getters, actions, mutations };
