const Modal = {
    open(){
        document
        .querySelector('.modal-overlay')
        .classList
        .add('active');
    },
    close(){
        document
        .querySelector('.modal-overlay')
        .classList
        .remove('active');
    }
}

const transactions = [
    {id: 1,
    description: 'Luz',
    amount: 50000,
    date: '23/01/2021'
    },{id: 2,
    description: 'Website',
    amount: 500000,
    date: '23/01/2021'
    },{id: 3,
    description: 'Internet',
    amount: -5000,
    date: '23/01/2021'
    },
]

const Transaction = {
    incomes() {
        //somar as entradas
    },
    expenses() {
        //somar saidas
    },
    total() {
        // entrada - saidas
    }
}

const DOM = {
    transactionsContainer: document.querySelector('#data-table tbody'),
    addTransaction(transactions, index){
        const tr = document.createElement('tr');
        tr.innerHTML = DOM.innerHTMLTransaction(transactions);

        DOM.transactionsContainer.appendChild(tr);
    },
    innerHTMLTransaction(transactions) {
        const CSSclass = transactions.amount > 0 ? "income" :
        "expense";


        const html = `
        
            <td class="description">${transactions.description}</td>
            <td class="${CSSclass}">${transactions.amount}</td>
            <td class="date">${transactions.date}</td>
            <td>
                <img src="./assets/minus.svg" alt="">
            </td>
          
        `
        return html;
    }
}

transactions.forEach(function(transactions){
    DOM.addTransaction(transactions)
})