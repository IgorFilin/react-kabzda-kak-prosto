import {reducer} from "./Reducer";


test('Reducer tests fake action type',()=>{

 let testState = { collapsed:true }
    let testAction = {type:'blabla'}



    let copyState = reducer(testState,testAction)


    expect(copyState).toEqual({ collapsed:true })


})
test('Reducer tests action type',()=>{

 let testState = { collapsed:true }
    let testAction = {type:'TOGGLE-VALUE'}



    let copyState = reducer(testState,testAction)


    expect(copyState).toEqual({ collapsed:false })


})
test('Reducer tests, add more keys value for object state',()=>{

 let testState = {
     collapsed:true,
     name:'igor',
     age:28
 }
    let testAction = {type:'TOGGLE-VALUE'}



    let copyState = reducer(testState,testAction)


    expect(copyState).toEqual({
        collapsed:false,
        name:'igor',
        age:28
    })


})