let mutationRate = 0.01;
let totalPopulation = 300; 

let population = [];
let matingPool = []; 
let target = 'Viver e melhor que sonhar'; 
let geration = 0; 


function setup() {
  createCanvas(930, 300);
  for(let i = 0; i < totalPopulation; i++){
    population.push( new DNA()); 
  }
}

function draw() {
  
  writing();
  geration ++; 
}

function writing(){
  for (let i = 0; i < population.length; i++) {
    population[i].fit();
  }
  let matingPool = []; 
  
  for (let i = 0; i < population.length; i++) {
    let n = int(population[i].fitness * 100);
  for (let j = 0; j < n; j++) {
      matingPool.push(population[i]);
    }
  }
  
  for (let i = 0; i < population.length; i++) {
    let a = int(random(matingPool.length));
    let b = int(random(matingPool.length));
    let partnerA = matingPool[a];
    let partnerB = matingPool[b];
    let child = partnerA.crossover(partnerB);
    child.mutate(mutationRate);
    population[i] = child;
    let t = child.getPhrase(); 
    if(t == target){
    console.log('encontrado')
    fill('white')
    textSize(40)
    background("#333333")
    text(t, 350, 150 )
    i = population.length + 1; 
    noLoop();   
    }else{
    fill('white')
    textSize(40)
    background("#333333")
    text(t, 350, 150 )

    }
  }
  textSize(30); 
  
  text("Geração: " + geration, 200,200 ); 
  text('Taxa de mutação: ' + mutationRate, 200,240)
  text('População: ' + totalPopulation, 200,280)
  
}