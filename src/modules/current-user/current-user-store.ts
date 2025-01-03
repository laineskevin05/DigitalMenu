import { acceptHMRUpdate, defineStore } from 'pinia';
import type { CurrentUser } from './current-user-type';

export const useCurrentUserStore = defineStore('currentUser', {
  state: (): CurrentUser => ({
    user: undefined,
    authorities: []
  }),
  getters: {
    isAuthorize: (state) => (menuAuthorities?: string[]) => {
      const authoritiesSet = new Set(state.authorities);
      return (
        menuAuthorities == null ||
        menuAuthorities.some((authority) => authoritiesSet.has(authority))
      );
    }
  },
  actions: {
    setCurrentUser(currentUser: CurrentUser) {
      this.user = currentUser.user;
      this.authorities = currentUser.authorities;
    }
  }
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCurrentUserStore, import.meta.hot));
}
