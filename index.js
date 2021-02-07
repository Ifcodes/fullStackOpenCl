// import React, {useState} from 'react'
// const parts = [
//   {
//     name: 'Fundamentals of React',
//     exercises: 10,
//     greet: function(){
//       return `Course title is ${this.name} and contains ${this.exercises} exercises`
//     }
//   },
//   {
//     name: 'Using props to pass data',
//     exercises: 7
//   },
//   {
//     name: 'State of a component',
//     exercises: 14
//   } 
// ]

// const App = () => {

// }

// // class Person{
// //   constructor(name, exercises){
// //     this.name = name
// //     this.exercises = exercises
// //   }
// //   greet() {
// //     console.log(`Course title is ${this.name} and contains ${this.exercises} exercises`)
// //   }
// // }

// // const english = new Person('Fundamentals of React', 10)
// // console.log(english.greet())

// // let str = ''

// // parts.map(val => str += `\n my name is ${val.name} and I am ${val.exercises} years old`)

// // let greeting = parts[0].greet()
// // console.log(str)

// // parts[1].creditUnit = function(){
// //  return this.exercises * 2
// // }
// // // parts[1].creditUnit()

// // setTimeout(greeting,1000)

// // import './index.css';
// // import App from './App';
// // import reportWebVitals from './reportWebVitals';

// // ReactDOM.render(
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>,
// //   document.getElementById('root')
// // );

// // // If you want to start measuring performance in your app, pass a function
// // // to log results (for example: reportWebVitals(console.log))
// // // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// // reportWebVitals();

// // const App = () => {
// //   console.log('Hello from component')
// // return (<div>
// //     <p>Hello world</p>
// //   </div>
// //   )
// // }
// // ReactDOM.render(<App />, document.getElementById('root'))

// // const App = () => {
// //   const parts = [
// //     {
// //       name: 'Arto Hellas',
// //       age: 35,
// //       education: 'PhD',
// //     },

// //     {
// //       name: 'Full Stack web application development',
// //       level: 'intermediate studies',
// //       size: 5,
// //     },

// //     {
// //       name: {
// //         first: 'Dan',
// //         last: 'Abramov',
// //       },
// //       grades: [2, 3, 5, 3],
// //       department: 'Stanford University',
// //     } 
// //   ]

// //   return (
// //     <div>
// //       <Greeting lastName = {parts[2].name.last} firstName = {parts[2].name.first} age = {parts[0].age} />
// //     </div>
// //   )
// // }

// // const Greeting = (props) => {
// //   const lname = props.lastName
// //   const fname = props.firstName
// //   const age = props.age
// //   const yearOfBirth = () => new Date().getFullYear() - age
// //   return (
// //     <div>
// //       <p>Hi {lname} {fname}, if you are {age} years old, this would mean you were born in the year {yearOfBirth()}. </p>
// //     </div>
// //   )
// // }

// // setInterval(() =>  ReactDOM.render(<App />, document.getElementById('root')),1000)q

// function plusMinus(arr) {
//  for(let i = 1; i <= arr; i++){
//    console.log(' '.repeat(arr - i)+'#'.repeat(i))
//  }
//   let stairs= 1
//   let spaces= arr-1
//   let result=''
//   while(stairs<=arr){

//     result+= ' '.repeat(spaces) + '#'.repeat(stairs)
//     if(stairs<arr) result+='\n'
//     spaces--
//     stairs++
// }
//  console.log(result)
// }
// plusMinus(6)

// console.log('plant corn')

// const delay = () =>{
//   setTimeout(() => console.log('Water plant'),3000)
// }
// delay()
// console.log('Add fertilizer')

// function gradingStudents(grades) {
//   // Write your code here
//   let mult = Math.ceil(grades / 5) * 5
//   console.log(mult)
//   if ((mult - grades) < 3) {
//     grades = mult
//     console.log(grades)
//   }
//   else if (grades < 38) {
//     console.log(grades)
//   }
// }
// gradingStudents(37)
// function vowelsAndConsonants(s) {
//  let vowels = ['a','e', 'i', '0', 'u']
//  let strSplit = s.split('')
//  let newVArr = []
//  let newCarr = []
//  let newStr;

//  strSplit.map(str=> {
//    if(vowels.includes(str)) {
//     newVArr.push(str)
//   }else{
//     newCarr.push(str)
//   }
//  })
//  newStr = newVArr.concat(newCarr).join('\n')
//  console.log(newStr)
//  return newStr
// }
// vowelsAndConsonants('javascript')

// function startCase(n){
//   for(let i = 1; i <= n; i++){
//     // for(let j = i; j<n; j++){
//     //   console.log('')
//     // }
//     console.log(' '.repeat(n-i) +  '#'.repeat(i))
//   }
// }
// startCase(4)
// function vowelsAndConsonants(s) {
// //   //     let vowels = /[aeiou]/gi
// //   //   let rgx = s.match(vowels)
// //   //   let conso = /[^aeiou]/gi
// //   //   let consRgx = s.match(conso)
    
// //   //   console.log(rgx.join('\n'))
// //   //   console.log(consRgx.join('\n'))
    
//     const vowels = ['a','e','i','o','u',]
//     const sArr = s.split('')
//     const vowStr = []
//     const consStr = []
//     let newV;

//     sArr.forEach(str => {
//      if(vowels.includes(str)) {vowStr.push(str)}
//      else{ consStr.push(str)}
//   })
//   console.log(vowStr.concat(consStr).join('\n'))
// }
//   vowelsAndConsonants('javascript')

// function factoral(n) {
//   let newN = 1
//   let count = 1
//   while (newN <= n){
//    count = count * newN
//     newN++
//   }
//  console.log(count)
// }
// factoral(4)

// function sum(a,b){
//   return a -b
// }

// function render(c){
//   for(let i = 1; i <= c; i++){
//     console.log(sum(i,1))
//   //  return sum(c,1)
//   }
// }
// render(5)

// let myObj = [
//   {
//     id: Math.random().toString(36).substring(2, 8),
//     name: "dele",
//     number: "08102228633"
//   },
//   {
//     id: Math.random().toString(36).substring(2, 8),
//     name: "Desmond",
//     number: "03944739394",
//     age: 28,
//     married: false
//   },
//   {
//     id: Math.random().toString(36).substring(2, 8),
//     name: "Willy",
//     number: "03944739394",
//     age: 29,
//     married: false
//   }
// ]

// myObj[0].age = 45
// myObj[0].married = true
// myObj[0]["year married"] = 1997

// const test = () => {
//  myObj.map(obj => {
//    if(obj.married) console.log(`${obj.name.charAt(0).toUpperCase().concat(obj.name.slice(1))}, with User ID: ${obj.id} is married. Got married in the year ${obj["year married"]}`)

//    else console.log(`${obj.name}, with User ID: ${obj.id} is not married`)
//  })
// }

// test()

// setTimeout(() => {
//   console.log('Loooop...')
//   let i = 0;
//   while(i < 500){
//     i++
//     console.log(i)
//   }
//   console.log('end')
// }, 1000)

let animals = [
  {name: "bruno", species: "dog"},
  {name: "kweet", species: "rabbit"},
  {name: "whisky", species: "dog"},
  {name: "jimmy", species: "fish"},
  {name: "devie", species: "dog"},
  {name: "ursula", species: "cat"}
]

let animalID = ''

let animalId = Math.random().toString(36).substring(2, 8)

let newAnimArr = animals.map(animal => animalID += `${animal.name} with id ${animalId} is a ${animal.species}\n`)

console.log(animalID)

// let isDog = function(animal) {
//   return animal.species === 'dog'
// }

// let dogs = animals.filter(isDog)
// let notDogs = animals.reject(isDog)
// console.log(dogs)
// console.log(`\n ${notDogs}`)

// let dogIntro = ''

// console.log(animalID)