import { AsyncStorage } from 'react-native';
export async function getAllProjects() {
    let apiUrl = 'http://mamaly100.pythonanywhere.com/Projects/projects/';
    let formData = new FormData();
    let options = {
        method: 'GET',
        // body: formData,
        headers: {
            Accept: '*/*',
            'Content-Type': 'application/json',
            // 'Authorization': 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJvcmlnX2lhdCI6MTU1OTU1NjUxNCwiZXhwIjoxNTU5NTYyNTE0LCJ1c2VyX2lkIjoxLCJlbWFpbCI6Im1haGRpcGF6b29raTIxQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoiZHgifQ.kCdXNmh_o28eLCPsHOwIMefYE12ckg2QI0uMkfIsWZw'
        }
    };
    var f = await fetch(apiUrl, options)
    f = await f.json()
    console.log(f)
    return f
}

export async function getUserProjects() {
    let apiUrl = 'http://mamaly100.pythonanywhere.com/accounts/Projects/';
    let formData = new FormData();
    let token = await AsyncStorage.getItem('token')
    let options = {
        method: 'GET',
        // body: formData,
        headers: {
            Accept: '*/*',
            'Content-Type': 'application/json',
            'Authorization': `JWT ${token}`
        }
    };
    var f = await fetch(apiUrl, options)
    f = await f.json()
    console.log(f)
    return f
}