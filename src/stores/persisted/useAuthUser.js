import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// locale
import client from '@/gql/apollo';
import { LoginDocument } from '@/gql';

const initialState = {
  currentUser: {},
  isLogin: false,
  isLoading: true,
  error: null,
  registerError: null,
  mailbox: {},
};

const useAuthUserStore = create(
  persist(
    (set, get) => ({
      ...initialState,
      // login
      login: async (request) => {
        try {
          console.log('request:', request);
          set({ isLoading: true, error: null });
          const response = await client.mutate({
            mutation: LoginDocument,
            variables: { request },
          });

          // auth token
          localStorage.setItem('accessToken', response.data.login?.accessToken);

          set((state) => ({
            currentUser: response.data.login,
            isLogin: true,
            isLoading: false,
          }));
        } catch (response) {
          set({ error: response, isLoading: false });
        }
      },
      // getCurrentUser: async () => {
      //   try {
      //     set({ isLoading: true, error: null });
      //     const response = await client.query({
      //       query: CurrentUserDocument,
      //       }
      //     );

      //     set((state) => ({
      //       currentUser: response,
      //       isLogin: true,
      //       isLoading: false,
      //     }));
      //   } catch (error) {
      //     console.log('error:', error);
      //   }
      // },
    }),
    {
      name: 'auth-user-storage',
    },
  ),
);

export default useAuthUserStore;
