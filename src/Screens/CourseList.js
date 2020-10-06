import React from 'react';
import {View,Text,FlatList,StyleSheet} from 'react-native';

const CourseList=(props)=>
{
    const courseList=[
        [
            {name:'CSE 4101',key:'1'},
            {name:'CSE 4102',key:'2'},
            {name:'CSE 4103',key:'3'},
            {name:'CSE 4104',key:'4'},
            {name:'CSE 4105',key:'5'},
            {name:'CSE 4106',key:'6'},
            {name:'Math 4117',key:'7'},
            {name:'HUM 4137',key:'8'},
        ],
        [
            {name:'CSE 4201',key:'1'},
            {name:'CSE 4202',key:'2'},
            {name:'CSE 4203',key:'3'},
            {name:'CSE 4204',key:'4'},
            {name:'CSE 4205',key:'5'},
            {name:'CSE 4206',key:'6'},
            {name:'Math 4217',key:'7'},
            {name:'HUM 4237',key:'8'},
        ],
        [
            {name:'CSE 4301',key:'1'},
            {name:'CSE 4302',key:'2'},
            {name:'CSE 4303',key:'3'},
            {name:'CSE 4304',key:'4'},
            {name:'CSE 4305',key:'5'},
            {name:'CSE 4306',key:'6'},
            {name:'Math 4317',key:'7'},
            {name:'HUM 4337',key:'8'},
        ]
    ];
    let course=undefined;
    if(props["route"]["params"]=="1st"){
        course=courseList[0];
    }
    else if (props["route"]["params"]=="2nd"){
        course=courseList[1];
    }
    else{
        course=courseList[2];
    }
    return (
        <View style={{justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:25,color:'blue'}}>Course List of {props["route"]["params"]} semester:</Text>
            <FlatList
            data={course}
            renderItem={function({item}){
                return <Text style={{fontSize:22,color:'black'}}>{item.key}.  {item.name}</Text>
            }}
            > 
            </FlatList>
        </View>
    );
}
export default CourseList;