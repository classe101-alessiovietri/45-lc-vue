// Verifico che l'oggettone Vue sia stato importato
console.log(Vue);

// Estraggo il metodo createApp dall'oggettone Vue (tramite destructuring)
const { createApp } = Vue;

// Verifico di aver estratto correttamente il metodo createApp
console.log(createApp);

createApp({
    data() {
        return {
            name: 'Classe 101',
            studentsNumber: 35,
            bon: {
                firstName: 'Francesco',
                lastName: 'Bonandin',
            }
        };
    },
    methods: {
        gestisciStoClick() {
            alert('Cliccato bottone');
        },
        sopraAlBottone() {
            console.log(this.bon);
        }
    }
}).mount('#app');