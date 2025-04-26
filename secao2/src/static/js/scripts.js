const { createApp, ref } = Vue

createApp({
    setup() {
        const title = ref('Lista de Tarefas')
        const tasksList = ref([])
        const newTask = ref('')

        const addTask = () => {
            if (newTask.value.trim() !== '') {
                tasksList.value.push({
                    text: newTask.value,
                    done: false
                })
                newTask.value = ''
            } else {
                alert('O nome de uma tarefa deve ser informado!')
            }
        }
        return {
            tasksList,
            title,
            newTask,
            addTask
        }
    }
}).mount('#app')