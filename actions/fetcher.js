import { AsyncStorage } from 'react-native';

export async function requestBacklogs() {
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

export async function deleteBacklog(backlogID) {
    let apiUrl = `http://mamaly100.pythonanywhere.com/Backlog/${backlogID}/`;
    // let formData = new FormData();
    let options = {
        method: 'DELETE',
        // body: formData,
        headers: {
            Accept: '*/*',
            'Content-Type': 'application/json',
            // 'Authorization': 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJvcmlnX2lhdCI6MTU1OTU1NjUxNCwiZXhwIjoxNTU5NTYyNTE0LCJ1c2VyX2lkIjoxLCJlbWFpbCI6Im1haGRpcGF6b29raTIxQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoiZHgifQ.kCdXNmh_o28eLCPsHOwIMefYE12ckg2QI0uMkfIsWZw'
        }
    };
    result = await fetch(apiUrl, options)
    console.log(result)
    return result.ok
}

export async function getTasksWithState(tastState) {
    let apiUrl = `http://mamaly100.pythonanywhere.com/Task/TaskByState/${tastState}/`;
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

export async function setPriority(priorities) {
    let apiUrl = 'http://mamaly100.pythonanywhere.com/Backlog/set_list_priority/';
    var p_list = priorities
    p_list = p_list.map((x) => parseInt(x, 10))
    let formData = { "priorities": p_list }
    formData = JSON.stringify(formData)

    console.log(formData)

    let options = {
        method: 'POST',
        body: formData,
        headers: {
            'accept': '*/*',
            'Content-Type': 'application/json',
            // 'Authorization': 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJvcmlnX2lhdCI6MTU1OTU1NjUxNCwiZXhwIjoxNTU5NTYyNTE0LCJ1c2VyX2lkIjoxLCJlbWFpbCI6Im1haGRpcGF6b29raTIxQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoiZHgifQ.kCdXNmh_o28eLCPsHOwIMefYE12ckg2QI0uMkfIsWZw'
        }
    };
    await fetch(apiUrl, options)
}

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