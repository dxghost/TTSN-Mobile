import { AsyncStorage } from 'react-native';

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

export async function addTask(name, description, backLogID, project_id){
    let apiUrl = 'http://mamaly100.pythonanywhere.com/Task/';
        let formData = new FormData();
        formData.append("TaskState", "TO_DO")
        formData.append("BackLogID", backLogID)
        formData.append("title", name)
        formData.append("ProjectID", project_id)
        formData.append("description", description)
        let options = {
            method: 'POST',
            body: formData,
            headers: {
                Accept: '*/*',
                'Content-Type': 'multipart/form-data',
                // 'Authorization': 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJvcmlnX2lhdCI6MTU1OTU1NjUxNCwiZXhwIjoxNTU5NTYyNTE0LCJ1c2VyX2lkIjoxLCJlbWFpbCI6Im1haGRpcGF6b29raTIxQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoiZHgifQ.kCdXNmh_o28eLCPsHOwIMefYE12ckg2QI0uMkfIsWZw'
            }
        };
        // console.log(formData)
        response = await fetch(apiUrl, options)
        //res_data = await JSON.parse(response._bodyText)
        return response
}

export async function pickTask(task_id, user_id){
    let apiUrl = `http://mamaly100.pythonanywhere.com/Task/${task_id}/`
            let formData = new FormData();
            formData.append("TaskState", "IN_PROGRESS")
            formData.append("picker", user_id)//should add picker 
            //formData.append("pickerid")
            let options = {
                method: 'PATCH',
                body: formData,
                headers: {
                    Accept: '*/*',
                    'Content-Type': 'multipart/form-data',
                    // 'Authorization': 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJvcmlnX2lhdCI6MTU1OTU1NjUxNCwiZXhwIjoxNTU5NTYyNTE0LCJ1c2VyX2lkIjoxLCJlbWFpbCI6Im1haGRpcGF6b29raTIxQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoiZHgifQ.kCdXNmh_o28eLCPsHOwIMefYE12ckg2QI0uMkfIsWZw'
                }
            };
            // console.log(formData)
            console.log(options)
            response = await fetch(apiUrl, options)
        //res_data = await JSON.parse(response._bodyText)
        return response
}