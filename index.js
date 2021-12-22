for (let triangle = "*"; triangle.length < 8; triangle += "*" )
    console.log(triangle);

let i = 0;
while (i <= 100) {
    if (i % 2 === 0) {
        console.log(i)
    }
    i++
}
const people = [
    {
        name: 'Adilet',
        salary: 23000
    },
    {
        name: 'Syimyk',
        salary: 59000
    },
    {
        name: 'Meerim',
        salary: 38000
    },
    {
        name: 'Nurdin',
        salary: 15000
    }
]
for (let i=0; i<people.length;i++ ){
    let person = people[i]
    if(person.name==='Nurdin'){
        person.salary += 2000
    }else{
        person.salary += 2000
    }
    if (person.salary <=20000){
        person.level="junior"
    }
    else if(person.salary <=50000){
        person.level="middle"
    }else{
        person.level="senior"
         }
    }
console.log(people)