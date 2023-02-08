import { useLocalStorage, removeLocalStorageItem } from "@/store/store";
import { defineStore } from "pinia";

export const useUserStore = defineStore('navbar', {
    state: () => ({
        user: JSON.parse(localStorage.getItem('user'))
    }),

    actions: {
        setUser(payload) {
            this.user = payload;
            useLocalStorage('user', payload)
        },
        
        logoutUser() {
            this.user = {};
            removeLocalStorageItem('user');
        }
    },

    getters: {
        getUser() {
            return this.user;
        }
    }


})