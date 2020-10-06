import React from 'react';
import {View,Text,FlatList} from 'react-native';

const FacultyMemberList=(props)=>{
    const FACULTIES=[
        {name:"Mr. X",key:'1'},
        {name:"Mr. Y",key:'2'},
        {name:"Mr. Z",key:'3'},
        {name:"Mr. Xy",key:'4'},
        {name:"Mr. YZ",key:'5'},
    ];
    return (
        <View style={{justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:25,color:'blue'}}>List of Faculty members:</Text>
            <FlatList
                data={FACULTIES}
                renderItem={
                    function({item}){
                        return(
                            <Text style={{fontSize:22}}>{item.key}.  {item.name}</Text>
                        )
                    }
                }
            />
        </View>
    );
}

export default FacultyMemberList;