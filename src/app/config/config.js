module.exports = {
    mode: "light",
    colors : {
        light: {
            header: 'bg-teal-600',
            main: 'bg-cool-white',
            sidebar: 'bg-cool-gray',
            selected: 'bg-cool-medium-gray',
            text: 'text-black',
            border: 'border-cool-dark-gray',
            component: 'bg-cool-white'
        },
        dark: {
            header: 'bg-teal-900',
            main: 'bg-cool-main',
            sidebar: 'bg-cool-sidebar',
            selected: 'bg-cool-selected',
            text: 'text-white',
            border: 'border-cool-black',
            component: 'bg-gray-900'
        }
    },
    language: "english",
    languages: {
        spanish: {
            navbar: {
                overview: "Resumen",
                why: "¿Por que?",
                how: "Guia de uso",
                meet: "Conóceme"
            },
            headers: {
                topheader: "Entradas",
                middleheader: "Hoy",
                bottonheader: "Próximo"
            },
            footer: "Añadir lista",
            settings: {
                title: "Configuración",
                languageOption: {
                    title: "Cambiar idioma",
                    english: "Ingles",
                    spanish: "Español"
                },
                darkMode: {
                    title: "Dark Mode"
                }
            },
            basics: {
                task: "Tarea",
                save: "Agregar",
                discard: "Descartar",
                close: "Cerrar",
                noTasks: "¡No tiene tareas registradas!",
                noText: "Introduce tu tarea aqui"
            }
        },
        english: {
            navbar: {
                overview: "Overview",
                why: "Why",
                how: "How to use?",
                meet: "Meet me"
            },
            headers : {
                topheader: "Entries",
                middleheader: "Today",
                bottonheader: "Soon"
            },
            footer: "New List",
            settings: {
                title: "Settings",
                languageOption: {
                    title: "Change Language",
                    english: "English",
                    spanish: "Spanish"
                },
                darkMode: {
                    title: "Dark Mode"
                }
            },
            basics: {
                task: "Task",
                save: "Add",
                discard: "Discard",
                close: "Close",
                noTasks: "You don't have any task registered!",
                noText: "Enter your task here"
            }
        },
    },
}