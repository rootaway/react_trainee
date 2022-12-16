var element = React.createElement('h1', null, 'Привет, как дела?');
var tittle = React.createElement('p', null, 'Хорошего тебе настроения!');
var block = React.createElement('div', {className: 'block'}, element, tittle)

ReactDOM.render(block, document.getElementById('main'));