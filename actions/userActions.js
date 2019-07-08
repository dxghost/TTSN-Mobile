export function updateUser(id, token){
    return {
        type: 'UPDATE_USER',
        payload: {id, token}
    }
}