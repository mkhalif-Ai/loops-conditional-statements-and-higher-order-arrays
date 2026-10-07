let people = [
    { name:"abdi", age: 30 ,city:"newyork"},
    { name:"ali", age: 20 ,city:"Nairobi"},
    { name:"hassan", age: 44 ,city:"mugadishu"}

    
]
for (let p of people){
   for (let   key  in p){
    console.log( key +":" + p[key]);
}
}
