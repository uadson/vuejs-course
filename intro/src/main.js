var contactsList = [
    {
        "id": 1,
        "name": "Luna",
        "email": "luna@luna.com",
        "phone": "556298983232",
        "photo": "./src/assets/cat.png"
    },
    {
        "id": 2,
        "name": "Marcelly",
        "email": "marcelly@email.com",
        "phone": "556233344499",
        "photo": "./src/assets/man.png"
    },

    {
        "id": 3,
        "name": "Milly",
        "email": "milly@email.com",
        "phone": "556212346547",
        "photo": "./src/assets/cat.png"
    },

    {
        "id": 4,
        "name": "Maya",
        "email": "maya@email.com",
        "phone": "556298746541",
        "photo": "./src/assets/shiba.png"
    },

    {
        "id": 5,
        "name": "Mel",
        "email": "mel@email.com",
        "phone": "556212346598",
        "photo": "./src/assets/shiba.png"
    },
]

const contactsService = {
    data() {
        return {
            contacts: window.contactsList
        }
    }
}

Vue.createApp(contactsService).mount("#app")