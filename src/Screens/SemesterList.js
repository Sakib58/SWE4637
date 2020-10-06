import React from 'react';
import {View,Text,Button} from 'react-native';

const SemesterList=(props)=>
{
    return (
        <View>
            <Text> </Text>
            <Button 
            title="1st Semester"
            onPress={
                function(){
                    props.navigation.navigate("CourseList","1st");
                }
            }
            />
            <Text> </Text>
            <Button 
            title="2nd Semester"
            onPress={
                function(){
                    props.navigation.navigate("CourseList","2nd");
                }
            }
            />
            <Text> </Text>
            <Button 
            title="3rd Semester"
            onPress={
                function(){
                    props.navigation.navigate("CourseList","3rd");
                }
            }
            />
        </View>
    );
}
export default SemesterList;