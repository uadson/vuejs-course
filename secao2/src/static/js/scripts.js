const { createApp, ref, onMounted } = Vue

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
                localStorage.setItem('tasks', JSON.stringify(tasksList.value))
                alert('Tarefa adicionada com sucesso!')
            } else {
                alert('O nome de uma tarefa deve ser informado!')
            }
        }

        const created = () => {
            this.tasksList = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem("tasks")) : this.tasksList
        }

        onMounted(created)

        return {
            tasksList,
            title,
            newTask,
            addTask,
        }
    }
}).mount('#app')