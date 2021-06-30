const health = 100;
const newAttack = 20;
function attack(health, attackPoint){
    const newHealth = health - attackPoint;
    return newHealth;
}

console.log('Health sebelum function dijalankan', health);
console.log('Health sesudah function dijalankan', attack(health, newAttack));