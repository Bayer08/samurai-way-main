import {v1} from "uuid";

export let state = {
    profilePage:{
        posts: [
            {id: v1(), message: 'HI', likesCount: 15},
            {id: v1(), message: 'KU-KU', likesCount: 25},
            {id: v1(), message: 'TURUTUTU', likesCount: 10},
            {id: v1(), message: 'Good morning', likesCount: 7},
            {id: v1(), message: 'HALLO', likesCount: 22},
            {id: v1(), message: 'YO', likesCount: 10}
        ],
        dialogs : [
            {id: v1(), name: 'Dima'},
            {id: v1(), name: 'Yura'},
            {id: v1(), name: 'Sveta'},
            {id: v1(), name: 'Egor'},
            {id: v1(), name: 'Roma'}
        ]
    },
    messagesPage:{
        messages: [
            {id: v1(), message: 'YO'},
            {id: v1(), message: 'HI'},
            {id: v1(), message: 'How are you?'},
            {id: v1(), message: 'How are you?'},
            {id: v1(), message: 'How are you?'}
        ]
    }
}
