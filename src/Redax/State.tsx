import {v1} from "uuid";

// let rerenderEntireTree=(props:StateType)=>{
//     console.log('was rerendered')
// }


export type PostsArray = {
    id: string,
    message: string,
    likesCount: number
}
export type DialogsArray = {
    id: string,
    name: string
}
export type MessagesArray = {
    id: string,
    message: string
}
export type StateType = {
        profilePage:{
            posts: PostsArray[]
            updatePostText:string
            dialogs: DialogsArray[]
            error:string
        }
        messagesPage:{
            messages: MessagesArray[]
        }

}

export let store = {
    _state : {
        profilePage:{
            posts: [
                {id: v1(), message: 'HI', likesCount: 15},
                {id: v1(), message: 'KU-KU', likesCount: 25},
                {id: v1(), message: 'TURUTUTU', likesCount: 10},
                {id: v1(), message: 'Good morning', likesCount: 7},
                {id: v1(), message: 'HALLO', likesCount: 22},
                {id: v1(), message: 'YO', likesCount: 10}
            ],
            updatePostText:'',
            dialogs : [
                {id: v1(), name: 'Dima'},
                {id: v1(), name: 'Yura'},
                {id: v1(), name: 'Sveta'},
                {id: v1(), name: 'Egor'},
                {id: v1(), name: 'Roma'}
            ],
            error:''
        },
        messagesPage:{
            messages: [
                {id: v1(), message: 'YO'},
                {id: v1(), message: 'HI'},
                {id: v1(), message: 'How are you?'},
                {id: v1(), message: 'How are you?'},
                {id: v1(), message: 'How are you?'}
            ]
        },
    },
    _callSubscriber(props:StateType){
        console.log('was rerendered')
    },
    getState () {
        return this._state
    },
    subscriber (observer:(props:StateType)=>void) {
        this._callSubscriber=observer
    },
    dispatch(action:string, textArea:string){
        if (action === 'UPDATE-PROFILE-PAGE-POST-TEXT') {
            this._state={...this._state,profilePage: {...this._state.profilePage,updatePostText: textArea,error: ''}}
            this._callSubscriber(this._state)
        } else if (action === 'ADD-PROFILE-PAGE-POST-TEXT') {
            if (textArea.trim()!=='') {
                let currentPost = {id:v1(), message:textArea, likesCount:0}
                this._state.profilePage.posts.push(currentPost)
                this._state={...this._state,profilePage: {...this._state.profilePage,updatePostText: ''}}
                this._callSubscriber(this._state)
            } else {
                this._state={...this._state,profilePage: {...this._state.profilePage,error: 'Field is required'}}
                this._callSubscriber(this._state)
            }
        } else if (action === 'UPDATE-PROFILE-PAGE-ERROR') {
            this._state={...this._state,profilePage: {...this._state.profilePage,error: 'Field is required'}}
            this._callSubscriber(this._state)
        }
        // addProfilePagePostText (textArea:string){
        //     if (textArea.trim()!=='') {
        //         let currentPost = {id:v1(), message:textArea, likesCount:0}
        //         this._state.profilePage.posts.push(currentPost)
        //         this._state={...this._state,profilePage: {...this._state.profilePage,updatePostText: ''}}
        //         this._callSubscriber(this._state)
        //     } else {
        //         this._state={...this._state,profilePage: {...this._state.profilePage,error: 'Field is required'}}
        //         this._callSubscriber(this._state)
        //     }
        // },
        // updateProfilePageError (error:string) {
        //     this._state={...this._state,profilePage: {...this._state.profilePage,error: error}}
        //     this._callSubscriber(this._state)

    }
}


//
//
// export let state = {
//     profilePage:{
//         posts: [
//             {id: v1(), message: 'HI', likesCount: 15},
//             {id: v1(), message: 'KU-KU', likesCount: 25},
//             {id: v1(), message: 'TURUTUTU', likesCount: 10},
//             {id: v1(), message: 'Good morning', likesCount: 7},
//             {id: v1(), message: 'HALLO', likesCount: 22},
//             {id: v1(), message: 'YO', likesCount: 10}
//         ],
//         updatePostText:'',
//         dialogs : [
//             {id: v1(), name: 'Dima'},
//             {id: v1(), name: 'Yura'},
//             {id: v1(), name: 'Sveta'},
//             {id: v1(), name: 'Egor'},
//             {id: v1(), name: 'Roma'}
//         ],
//         error:''
//     },
//     messagesPage:{
//         messages: [
//             {id: v1(), message: 'YO'},
//             {id: v1(), message: 'HI'},
//             {id: v1(), message: 'How are you?'},
//             {id: v1(), message: 'How are you?'},
//             {id: v1(), message: 'How are you?'}
//         ]
//     },
// }
//
// // export const updateProfilePagePostText = (textArea:string) => {
// //     state={...state,profilePage: {...state.profilePage,updatePostText: textArea,error: ''}}
// //     rerenderEntireTree(state)
// // }
// export const addProfilePagePostText =(textArea:string)=> {
//     if (textArea.trim()!=='') {
//         let currentPost = {id:v1(), message:textArea, likesCount:0}
//         state.profilePage.posts.push(currentPost)
//         state={...state,profilePage: {...state.profilePage,updatePostText: ''}}
//         rerenderEntireTree(state)
//     } else {
//         state={...state,profilePage: {...state.profilePage,error: 'Field is required'}}
//         rerenderEntireTree(state)
//     }
// }
// export const updateProfilePageError = (error:string) => {
//     state={...state,profilePage: {...state.profilePage,error: error}}
//     rerenderEntireTree(state)
// }
// export const subscriber = (observer:(props:StateType)=>void) => {
//     rerenderEntireTree=observer
// }
//
