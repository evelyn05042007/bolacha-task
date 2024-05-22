document.addEventListener("DOMContentLoaded", function() {
    const orderInput = document.getElementById("orderInput");
    const addOrderButton = document.getElementById("addOrderButton");
    const ordersList = document.getElementById("ordersList");
    const menuList = document.getElementById("menuList");
    const accompanimentList = document.getElementById("accompanimentList");
    const specialMenuList = document.getElementById("specialMenuList");

    // Definindo o cardápio com os sabores e preços
    const menu = [
        { sabor: "Chocolate", preco: 5.00 },
        { sabor: "Baunilha", preco: 4.00 },
        { sabor: "Morango", preco: 4.50 },
        { sabor: "Limão", preco: 4.00 },
        { sabor: "Amendoim", preco: 6.00 },
        { sabor: "Canela", preco: 3.50 }
    ];

    // Definindo os acompanhamentos com os preços
    const accompaniments = [
        { nome: "Café", preco: 4.00 },
        { nome: "Café com Leite", preco: 4.00 },
        { nome: "Chá", preco: 3.50 },
        { nome: "Suco de Laranja", preco: 3.00 },
        { nome: "Água", preco: 3.00 }
    ];

    // Definindo o cardápio especial para o final de semana
    const specialMenu = [
        { sabor: "Brownie de Chocolate", preco: 7.00 },
        { sabor: "Cookie de Amêndoas", preco: 6.50 },
        { sabor: "Pão de Mel", preco: 5.50 },
        { sabor: "Trufa de Limão", preco: 8.00 }
    ];

    // Função para adicionar itens do cardápio à lista
    function renderMenu() {
        menu.forEach(item => {
            const listItem = document.createElement("li");
            listItem.textContent = `${item.sabor} - R$ ${item.preco.toFixed(2)}`;
            menuList.appendChild(listItem);
        });
    }

    // Função para adicionar itens de acompanhamentos à lista
    function renderAccompaniments() {
        accompaniments.forEach(item => {
            const listItem = document.createElement("li");
            listItem.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
            accompanimentList.appendChild(listItem);
        });
    }

    // Função para adicionar itens do cardápio especial à lista
    function renderSpecialMenu() {
        specialMenu.forEach(item => {
            const listItem = document.createElement("li");
            listItem.textContent = `${item.sabor} - R$ ${item.preco.toFixed(2)}`;
            specialMenuList.appendChild(listItem);
        });
    }

    renderMenu();
    renderAccompaniments();
    renderSpecialMenu();

    addOrderButton.addEventListener("click", function() {
        const order = orderInput.value.trim();
        if (order !== "") {
            const listItem = document.createElement("li");
            listItem.textContent = order;
            ordersList.appendChild(listItem);
            orderInput.value = "";
            alert("Pedido adicionado com sucesso!");
        } else {
            alert("Por favor, insira o seu pedido.");
        }
    });
});
