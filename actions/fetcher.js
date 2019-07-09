import { AsyncStorage } from 'react-native';

export async function requestBacklogs(project_id) {
    let apiUrl = `http://mamaly100.pythonanywhere.com/Projects/projects/${project_id}/Backlogs/`
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
    result = result.toString()
    console.log(result)
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

export async function getTasksWithState(taskState, project_id) {
    let apiUrl = `http://mamaly100.pythonanywhere.com/Task/TaskByState/${taskState}/${project_id}/`;
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

    function filterByState(item, taskState) {
        if (item.TaskState == taskState) {
            return true
        }
        return false
    }

    return f
}

export async function setPriority(priorities) {
    let apiUrl = 'http://mamaly100.pythonanywhere.com/Backlog/set_list_priority/';
    var p_list = priorities
    var projectID = await AsyncStorage.getItem("currentProjectID")
    projectID = Number.parseInt(projectID)
    p_list = p_list.map((x) => parseInt(x, 10))
    let formData = {
        "priorities": p_list,
        "ProjectID" : projectID
    }
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
    var response = await fetch(apiUrl, options)
    console.log(response)
}

export async function addProject(data) {

    let apiUrl = 'https/mamaly100.pythonanywhere.com/Projects/projects/'
    // var formData = JSON.stringify(data)
    // data = {data}
    data = JSON.stringify(data)
    console.log(data)
    let options = {
        method: 'POST',
        body: data,
        headers: {
            'accept': '*/*',
            'Content-Type': 'application/json',
            'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo2LCJleHAiOjE1NjI2MzAwMTUsInVzZXJuYW1lIjoibSIsImVtYWlsIjoibUBtLmNvbSJ9.rXeSxgREY6Nmlfw8TidUiCYYcKL1nQPg_1OJvKoX230'
        }
    }
    try {
        const response = await fetch(apiUrl, options)
        response = await response.json()
        console.log(response)
    }
    catch (err) { console.log(err) }
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