const adicionarItens = document.querySelector('.add-items');
const listaItens = document.querySelector('.pratos');
const itens = JSON.parse(localStorage.getItem('itens') ?? '[]');
const apagar = adicionarItens.querySelector('.clear-list');
if (itens.length !== 0)
    adicionarALista(itens, listaItens);
function adicionarItem(e) {
    e.preventDefault();
    const text = adicionarItens.querySelector(`input[name=item]`).value;
    const item = {
        text,
        feito: false
    };
    adicionarItens.reset();
    itens.push(item);
    localStorage.setItem('itens', JSON.stringify(itens));
    adicionarALista(itens, listaItens);
}
function adicionarALista(itens = [], lista) {
    const html = itens.map((item, index) => {
        return `<li>
        <input type="checkbox" data-index=${index} id="item${index}" ${item.feito ? 'checked' : ''}> <label for="item${index}">${item.text}</label>
        </li>`;
    }).join('');
    lista.innerHTML = html;
}
function apagarLista() {
    localStorage.clear();
    location.reload();
}
function alternarFeito(e) {
    if (!e.target.matches('input'))
        return;
    const checkbox = e.target;
    const checkboxIndex = Number(checkbox.dataset.index);
    itens[checkboxIndex].feito = checkbox.checked;
    localStorage.setItem('itens', JSON.stringify(itens));
    adicionarALista(itens, listaItens);
}
adicionarItens.addEventListener('submit', adicionarItem);
apagar.addEventListener('click', apagarLista);
listaItens.addEventListener('click', alternarFeito);
export {};
//# sourceMappingURL=script.js.map