Vue.component('task-list', {
    template: '<div><task v-for="task in tasks">{{ task.description }}</task></div>',
    data() {
        return {
            tasks: [
                { description: 'Go to the farm', completed: false },
                { description: 'Go to the mail', completed: true },
                { description: 'Go to the bar', completed: false },
                { description: 'Go fishing', completed: true },
            ]
        }
    }
});


Vue.component('task', {
    template: '<li><slot></slot></li>',
    data() {
        return {

        }
    }
});



let app = new Vue({
    el: '#root',
    data: {
        message: 'Tasks to solve:'
    },
});

