const delay = ms => {
    return new Promise(r => r(), ms)
}

const url = 'https://jsonplaceholder.typicode.com/todos'

async function fetchAsyncTodo() {
    try {
        await delay(2000)
        const response = await fetch(url)
        const data = await response.json()
        console.log('Data:', data)
    } catch (e) {
        console.error(e)
    } finally {
        console.log('FINALLY!')
    }
}

fetchAsyncTodo()