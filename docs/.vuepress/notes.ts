import {defineNoteConfig, defineNotesConfig} from 'vuepress-theme-plume'

const pythonNote = defineNoteConfig({
    dir: 'python',
    link: '/python',
    sidebar: [
        {
            text: 'Get Freedom From Python',
        }
        ,{
        text: '🐛Python',
        link: '/python/',
        items: ['Basic_learning', 'Deep_and_shallow_copy', 'Iterator_and_generator', 'Examination', 'LeetCode101'],
        collapsed: true
    },
    ]
})

const rustNote = defineNoteConfig({
    dir: 'rust',
    link: '/rust',
    sidebar: [
        {
        text: 'Rust',
        items: ['Rust'],
        collapsed: true},
    ]
})

export const notes = defineNotesConfig({
    dir: 'notes',
    link: '/',
    notes: [pythonNote, rustNote],
})
