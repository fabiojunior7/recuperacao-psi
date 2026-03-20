const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let elementos = [];

// MENU
function menu() {
  console.log("\n--- MENU ---");
  console.log("1. Adicionar elemento");
  console.log("2. Listar elementos");
  console.log("3. Alterar estado");
  console.log("4. Procurar elemento");
  console.log("5. Remover elemento");
  console.log("6. Sair");

  rl.question("Escolha uma opção: ", (opcao) => {
    switch (opcao) {
      case "1": adicionar(); break;
      case "2": listar(); break;
      case "3": alterar(); break;
      case "4": procurar(); break;
      case "5": remover(); break;
      case "6": rl.close(); break;
      default:
        console.log("Opção inválida!");
        menu();
    }
  });
}

// ADICIONAR
function adicionar() {
  rl.question("ID: ", (id) => {
    rl.question("Capacidade: ", (cap) => {
      rl.question("Estado (livre/ocupado): ", (estado) => {
        elementos.push({
          id: parseInt(id),
          capacidade: parseInt(cap),
          estado: estado
        });
        console.log("Elemento adicionado!");
        menu();
      });
    });
  });
}

// LISTAR
function listar() {
  console.log("\n--- LISTA ---");
  elementos.forEach(e => {
    console.log(`ID: ${e.id} | Cap: ${e.capacidade} | Estado: ${e.estado}`);
  });
  menu();
}

// ALTERAR ESTADO
function alterar() {
  rl.question("ID do elemento: ", (id) => {
    let el = elementos.find(e => e.id == id);
    if (el) {
      rl.question("Novo estado: ", (novo) => {
        el.estado = novo;
        console.log("Estado atualizado!");
        menu();
      });
    } else {
      console.log("Elemento não encontrado!");
      menu();
    }
  });
}

// PROCURAR
function procurar() {
  rl.question("ID: ", (id) => {
    let el = elementos.find(e => e.id == id);
    if (el) {
      console.log(el);
    } else {
      console.log("Não encontrado!");
    }
    menu();
  });
}

// REMOVER
function remover() {
  rl.question("ID: ", (id) => {
    elementos = elementos.filter(e => e.id != id);
    console.log("Removido!");
    menu();
  });
}

// INICIAR
menu();
