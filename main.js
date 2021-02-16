const addElement = (e, node, txt, attr, value) => {
    e.preventDefault();
    const element = document.createElement(node);

    if (txt) {
        const text = document.createTextNode(txt);
        element.appendChild(text);
    }
    if (attr) {
        element.setAttribute(attr, value)
    }

    document.querySelector('.content').appendChild(element);

}

const searchElements = (e, nameElement) => {
    e.preventDefault(e);
    const infoElement = document.querySelector('.result');
    infoElement.textContent = '';
    const elements = [...document.querySelectorAll(nameElement)];
    console.log(elements);
    if (elements.length) {
        infoElement.innerHTML = `<p class="result__number-info"> W tym dokumencie znalazłem ${elements.length} elementów ${nameElement} </p>`

        showInfo(elements, infoElement)

    } else { infoElement.innerHTML = `<p class="result__number-info"> W tymo dokumencie nie znalazłem elementów ${nameElement} </p>` }

};
const showInfo = (elements, inforElement) => {
    console.log(elements, inforElement);
    elements.forEach((element) => {
        const item = document.createElement('div');
        item.className = 'result__element-description';
        item.innerHTML = `
        <div><strong>${element.nodeName}</strong></div>
        <div>klasa/klasy: ${element.className}</div>
        <div>Wysokość elementu (offsetHeight): ${element.offsetHeight}</div>
        <div>Szerokość elementu (offsetWidth): ${element.offsetWidth}</div>
        <div>Odległość od lewej krawędzi (offsetLeft): ${element.offsetLeft}</div>
        <div>Odległość od górnej krawędzi (offsetTop): ${element.offsetTop}</div>
        <div>Liczba elementów dzieci (childElementCount): ${element.childElementCount}</div>
        <br />
        `
        inforElement.appendChild(item);




    })

};

const addForm = document.querySelector('.form--add');
addForm.addEventListener('submit', (e) => addElement(
    e,
    addForm.elements.node.value,
    addForm.elements.text.value,
    addForm.elements.attr.value,
    addForm.elements.value.value,
))

const searchForm = document.querySelector('.form--search');
searchForm.addEventListener('submit', (e) => searchElements(e, searchForm.elements['searching-element'].value))


