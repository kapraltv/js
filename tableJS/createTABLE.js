const items = [{
        index: '0',
        name: 'Dima',
        email: 'Email1',
        balance: 5436
    },
    {
        index: '1',
        name: 'Maks',
        email: 'Email2',
        balance: 4321
    },
    {
        index: '2',
        name: 'Roma',
        email: 'Email3',
        balance: 1233
    },
]

const tableSchema = {
    index: '#',
    name: 'Name',
    email: 'Email',
    balance: 'Balance',
}

function generateThead(tableSchema) {
    const thead = document.createElement('thead');
    const tr = generateTr(tableSchema, 'th');
    thead.appendChild(tr);
    return thead;
}

function generateTr(tableSchema, tagName = 'td') {
    const tr = document.createElement('tr');
    Object.values(tableSchema).forEach(val => {
        const td = document.createElement(tagName);
        td.textContent = val;
        tr.appendChild(td);
    })
    return tr;
}

function generateTbody(tableSchema, items) {
    const tbody = document.createElement('tbody');
    items.forEach((item, index) => {
        item.index = index + 1;
        const itemsSchema = generateItemsSchema(tableSchema, item);
        const tr = generateTr(itemsSchema, 'td');
        tbody.appendChild(tr);
    })
    return tbody;
}

function generateItemsSchema(tableSchema, item) {
    const itemSchema = Object.keys(tableSchema).reduce((acc, key) => {
        if (key in item) {
            acc[key] = item[key];
        }

        return acc;
    }, {})

    return itemSchema;
}

function generateTableTemplate() {
    const table = document.createElement('table');
    table.classList.add('table');
    return table;
}

function generateTotalBalance(tableSchema, items) {
    const total = items.reduce((acc, item) => acc + parseFloat(item.balance), 0);
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    const columnCounts = Object.keys(tableSchema).length;

    td.insertAdjacentHTML('beforeend', `Total balance: <b>${total}</b>`);
    td.setAttribute('colspan', columnCounts);
    td.setAttribute('align', 'right');

    tr.appendChild(td);

    return tr;
}

function initTable(tableSchema, items) {
    const container = document.querySelector('.table-container');
    const table = generateTableTemplate();
    const header = generateThead(tableSchema);
    const body = generateTbody(tableSchema, items);
    const total = generateTotalBalance(tableSchema, items)

    table.appendChild(header);
    table.appendChild(body);
    table.appendChild(total);

    container.appendChild(table);
}

initTable(tableSchema, items);