const initState = {
    posts: [
        {id: '1', title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry', body:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'},
        {id: '2', title: '2Lorem Ipsum is simply dummy text of the printing and typesetting industry', body:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'},
        {id: '3', title: '3Lorem Ipsum is simply dummy text of the printing and typesetting industry', body:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'},
    ]
}

const rootReducer = (state = initState, action) => {
    if(action.type === 'DELETE_POST') {
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        });
        return {
            ...state,
            posts: newPosts
        }
    }
    return state;
}

export default rootReducer