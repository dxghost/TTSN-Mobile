export function updateProject(project){
    return {
        type: 'UPDATE_PROJECT',
        payload: { project }
    }
}