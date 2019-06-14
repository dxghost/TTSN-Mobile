import { AsyncStorage } from 'react-native';

export async function requestBacklogs(){
    let apiUrl = 'http://mamaly100.pythonanywhere.com/Backlog/';
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
    result = await fetch(apiUrl, options)
    result = result._bodyInit
    result.toString()
    try {
        await AsyncStorage.setItem('backlogs', result);
        await AsyncStorage.setItem('performFetch', "false");
    } catch (error) {
        console.log(error)
    }

}

