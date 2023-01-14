import { useLocalStorage, clearLocalStorage } from "@/store/store";
import { defineStore } from "pinia";

export const useNavBarStore = defineStore('navbar', {
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
            clearLocalStorage();
        }
    },

    getters: {
        getUser() {
            return this.user;
        }
    }


})