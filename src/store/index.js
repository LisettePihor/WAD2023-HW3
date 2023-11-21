import { createStore } from 'vuex'

export default createStore({
    strict: true,
    state: {
            postList: [
                {id: 1, username: "johndoe123", content: "Tartu 2024", image: require('@/assets/tartu2024.jpg'), date: "01.11.2023"},
                {id: 2, username: "mary123", content: "University of Tartu", image: require('@/assets/University of Tartu.jpg'), date: "02.11.2023"},
                {id: 3, username: "TreeJames", content: "Upside down house", image: require("@/assets/tagurpidiMaja.jpeg"), date: "04.11.2023"},
                {id: 4, username: "Liza Cat", content: "Pretty sunset", image: require('@/assets/sunset.jpeg'), date: "06.11.2023"},
                {id: 5, username: "alan11", content: "My bird Cherry", image: require("@/assets/parrot.jpg"), date: "11.11.2023"},
                {id: 6, username: "HansBob", content: "This is Norway", image: require("@/assets/norway.jpeg"), date: "15.11.2023"},
                {id: 7, username: "Duck123", content: "I study in Delta", image: require("@/assets/delta.jpg"), date: "16.11.2023"},
                {id: 8, username: "Chad98", content: "Currently travelling", image: require("@/assets/airplane.jpeg"), date: "16.11.2023"},
                {id: 9, username: "OldGranny", content: "I cooked for my grandchildren", image: require("@/assets/food.jpeg"), date: "17.11.2023"},
                {id: 10, username: "SantaClaus", content: "See you soon :)", image: require("@/assets/santa.jpeg"), date: "21.11.2023"},
            
                ]
    },
    mutations: {
      },
      actions: {
      },
      getters: {
      },
    });