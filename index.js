// Definindo a classe Heroi
class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome
      this.idade = idade
      this.tipo = tipo
    }
  
    atacar() {
      let ataque
  
      // Determinando o tipo de ataque com base no tipo do herói
      switch (this.tipo) {
        case 'mago':
          ataque = ' magia'
          break;
        case 'guerreiro':
          ataque = ' espada'
          break;
        case 'monge':
          ataque = ' artes marciais'
          break;
        case 'ninja':
          ataque = ' shuriken'
          break;
        default:
          ataque = ' um ataque indefinido'
      }
  
      // Exibindo a mensagem de ataque
      console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`)
    }
  }
  
  // Exemplo de uso da classe Heroi
  const heroi1 = new Heroi('Aragorn', 30, 'guerreiro')
  const heroi2 = new Heroi('Gandalf', 150, 'mago')
  
  heroi1.atacar(); 
  heroi2.atacar(); 
  