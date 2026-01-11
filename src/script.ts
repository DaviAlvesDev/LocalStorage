interface item {
    text:string
    feito:boolean
}

const adicionarItens = document.querySelector('.add-items') as HTMLFormElement
const listaItens = document.querySelector('.pratos') as HTMLUListElement
const itens:item[] = JSON.parse(localStorage.getItem('itens')?? '[]')
const apagar = adicionarItens.querySelector('.clear-list') as HTMLButtonElement

if (itens.length !== 0) adicionarALista(itens, listaItens)

function adicionarItem(e:SubmitEvent) {
    e.preventDefault()
    const text = (adicionarItens.querySelector(`input[name=item]`) as HTMLInputElement).value
    const item:item = {
        text,
        feito: false
    }
    adicionarItens.reset()
    itens.push(item)
    localStorage.setItem('itens', JSON.stringify(itens))
    

    adicionarALista(itens, listaItens)
}

function adicionarALista(itens:item[] = [], lista:HTMLUListElement) {
    const html = itens.map((item, index) => {
        return `<li>
        <input type="checkbox" data-index=${index} id="item${index}" ${item.feito ? 'checked' : ''}> <label for="item${index}">${item.text}</label>
        </li>`
    }).join('')

    lista.innerHTML = html
}

function apagarLista(){
    localStorage.clear()
    location.reload()
}

function alternarFeito(e:MouseEvent){
    if (!(e.target as HTMLElement).matches('input')) return

    const checkbox = e.target as HTMLInputElement
    const checkboxIndex = Number(checkbox.dataset.index)

    itens[checkboxIndex]!.feito = checkbox.checked

    localStorage.setItem('itens', JSON.stringify(itens))

    adicionarALista(itens, listaItens)
}

adicionarItens.addEventListener('submit', adicionarItem)

apagar.addEventListener('click', apagarLista)

listaItens.addEventListener('click', alternarFeito)