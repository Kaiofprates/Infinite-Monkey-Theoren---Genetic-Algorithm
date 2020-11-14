class DNA {
  
  constructor(){
  this.target = 'Viver e melhor que sonhar';   
  this.fitness = 0;   
  this.genes = [];
  this.len = target.length;   
  for(let i = 0; i < target.length; i++){
    this.genes.push(char(random(32,128))); 
  }  
  }
  
  fit(){
  let score = 0; 
  for(let i = 0; i < this.len; i++){
  if(this.genes[i] == this.target.charAt(i)){
    score++;
  }
  }
  this.fitness = float(score)/this.target.length; 
  }
  
  crossover(partner){
    let child  = new DNA(); 
    let midpoint = int(random(this.len)); 
    for(let i = 0; i < this.len; i++){
      if(i < midpoint){
      child.genes[i] = this.genes[i];   
      }else{
        child.genes[i] = partner.genes[i]; 
      }
    }
    return child; 
  }
  
  mutate (mutationRate){
    for(let i = 0; i < this.len; i++){
      if(random(1) < mutationRate){
        this.genes[i] = char(random(32,128))
      }
    }
  }
  
  getPhrase(){
    return str(this.genes.join(''))
  }
  
  
}
