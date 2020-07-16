/**
  Propiedades 
  1. Id de cuenta
  2. Name
  3. Last name
  4. Age
  5. Saldo

  Métodos
  1. Obtener nombre completo
  2. Es mayor de edad
  3. Es deudor


  if (...) {
    
  }
 */

class Account {
  constructor(id, name, lastName, age, balance) {
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.balance = balance;
  }

  getFullName() {
    return `${this.name} ${this.lastName}`;
  }

  isAdult() {
    if (this.age < 18) {
      return false;
    } else {
      return true;
    }
  }

  userHasDebt() {
    if (this.balance > 0) {
      return false;
    } else {
      return true;
    }
  }
}

// const student = new Student(23, 'Pedro', 'Alvarez', '21 de Mayo', 1, '1er semestre')


// Genaro 
const accountFirst = new Account(10, 'Rogelio', 'Camacho', 35, -1500)
const accountSecond = new Account(11, 'Angela', 'Robles', 57, -500)
const accountThird = new Account(12, 'Tomas', 'Echeverria', 26, -3500)

// Eduardo
const account2 = new Account(3, 'Laura', 'Ortiz', 29, -350)
const account9 = new Account(9, 'Mario', 'Reynoso', 61, 1260)
const account12 = new Account(13, 'Alberto', 'Ornelas', 40, 600)
// Ale
const account1 = new Account(4, 'Lucas', 'Gray', 32, 320)
const account3 = new Account(7, 'Maria', 'Gray', 35, -450)


// Arreglo de objetos Account's
const accounts = []

accounts.push(accountFirst)
accounts.push(accountSecond)
accounts.push(accountThird)
accounts.push(account2)
accounts.push(account9)
accounts.push(account12)
accounts.push(account1)
accounts.push(account3)


{/* <tr>
  <th scope="row">1</th>
  <td>Mark</td>
  <td>Otto</td>
  <td>@mdo</td>
  <td>@mdo</td>
</tr> */}

// textContent => Llenar la informacion de account en la lista
// 

const tableBodyElement = document.getElementById('table-body')
for(let i=0; i<accounts.length; i++) {
  //Crear elementos para agregarlos a la table
  const trElement = document.createElement('tr')
  const thElementId = document.createElement('th')
  const tdElementFullName = document.createElement('td')
  const tdElementIsAdult = document.createElement('td')
  const tdElementHasDebt = document.createElement('td')
  const tdElementBalance = document.createElement('td')

  // Agregamos informacion
  thElementId.textContent = accounts[i].id
  tdElementFullName.textContent = accounts[i].getFullName()
  tdElementIsAdult.textContent = accounts[i].isAdult()
  tdElementHasDebt.textContent = accounts[i].userHasDebt()
  tdElementBalance.textContent = accounts[i].balance  
  
  // Agregamos nodos hijos al padre
  trElement.appendChild(thElementId)
  trElement.appendChild(tdElementFullName)
  trElement.appendChild(tdElementIsAdult)
  trElement.appendChild(tdElementHasDebt)
  trElement.appendChild(tdElementBalance)

  tableBodyElement.appendChild(trElement)
}


