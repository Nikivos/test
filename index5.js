//data
let currentUser = {
    name: 'Alex'
}

let card1 = {
    type: 'debit',
    networkType: 'mastercard',
    currencyType: 'USD',
    currentBalance: 5750.53,
    cardNumber: 5282345678901289,
    expirationYear: 2025,
    expirationMonth: 9,
    isActive: true,

    transaction: {
        title: 'Order Revenue',
        amount: 874,
        date: new Date(2022, 3, 25, 16, 43, 22) // Месяцы в JavaScript начинаются с 0, поэтому 3 - это апрель.
    },
    transactions: [
        {
            title: 'Order Revenue',
            amount: -874,
            date: new Date(2022, 3, 25, 16, 43, 22) // Месяцы в JavaScript начинаются с 0, поэтому 3 - это апрель.
        },
        {
            title: 'Order Revenue',
            amount: 874,
            date: new Date(2022, 3, 25, 16, 43, 22)
        }
    ]
};

let card2 = {
    type: 'credit',
    networkType: 'visa',
    currencyType: 'EUR',
    currentBalance: 1342.53,
    cardNumber: 9232654321012032,
    expirationYear: 2026,
    expirationMonth: 4,
    isActive: false,
    transaction: {
        title: 'Order Revenue',
        amount: 874,
        date: new Date(2022, 3, 25, 16, 43, 22) // Месяцы в JavaScript начинаются с 0, поэтому 3 - это апрель.
    },
    transactions: [
        {
            title: 'Order Revenue',
            amount: -874,
            date: new Date(2022, 3, 25, 16, 43, 22) // Месяцы в JavaScript начинаются с 0, поэтому 3 - это апрель.
        },
        {
            title: 'Order Revenue',
            amount: -874,
            date: new Date(2022, 3, 25, 16, 43, 22)
        }
    ]


};

let card3 = {
    type: 'debitt',
    networkType: 'mastercard',
    currencyType: 'GPB',
    currentBalance: 3263.65,
    cardNumber: 5543259349582930,
    expirationYear: 2028,
    expirationMonth: 3,
    isActive: true,
    transaction: {
        title: 'Order Revenue',
        amount: 874,
        date: new Date(2022, 3, 25, 16, 43, 22) // Месяцы в JavaScript начинаются с 0, поэтому 3 - это апрель.
    },
    transactions: [
        {
            title: 'Order Revenue',
            amount: -874,
            date: new Date(2022, 3, 25, 16, 43, 22) // Месяцы в JavaScript начинаются с 0, поэтому 3 - это апрель.
        },
        {
            title: 'Order Revenue',
            amount: 874,
            date: new Date(2022, 3, 25, 16, 43, 22)
        }
    ]

}
let cards = [card1, card2, card3];
//render
document.write('<h1>', 'Welcom Back,' + currentUser.name, '</h1>');
document.write('<h2>', 'My Cards', '</h1>');
//render card 1
for (let i = 0; i < cards.length; i++) {
    let card = cards[i];
    document.write('<div>');
    let cardLogo = ''
    switch (card.networkType) {
        case 'visa':
            cardLogo = '<img src="Vector.png">';
            break;
        case 'mastercard':
            cardLogo = '<img src="mastercard_logo.png">';
            break;


    }
   
 

    document.write('<b>', card.type + 'card', '</b>', '<br>');
    document.write(cardLogo);
    document.write('<b>', 'Current Balance', '</b>', '<br>');

    let currencySign = '$';
    switch (card.currencyType) {
        case 'USD':
            currencySign = '$';
            break;

        case 'EUR':
            currencySign = '§';
            break;
        case 'GPB':
            currencySign = '@'
            break;
    }

    document.write('<span>', currencySign  +  card.currentBalance, '</span>', '<br>');
    document.write('<span>', card.cardNumber, '</span>', '<br>');
    document.write('<span>', card.expirationMonth, '/', card.expirationYear, '</span>', '<br>');
    document.write("<h2>", 'History Transaction', "</h2>");
    document.write("<ul>");
    for (let j = 0; j < card.transactions.length; j++) {
        let transaction = card.transactions[j];
        document.write(
            "<li>",
            transaction.title,
            ", ",
            transaction.date,
            ",",
        );

        if (transaction.amount > 0) {
            document.write(
                '<span class="income">',
                transaction.amount,
                '</span>'
            );
        } else {
            document.write(
                '<span class="outcome">',
                transaction.amount,
                '</span>');
        }

        document.write(
            "</li>"
        );
    }




    // .. добавьте отображение второй транзакции
    document.write("</ul>");
    document.write('<div>');
    document.write('<hr>');
}
if (card1.currencyType === 1) {
    console.log('EUR');
} else if (card1.currencyType === 2) {
    console.log('USD');
}

