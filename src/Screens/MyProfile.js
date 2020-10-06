import React from 'react';
import {View,Text,Image,StyleSheet} from 'react-native';

const myProfile=(props)=>
{
    return(
        <View>
            <View style={styles.viewStyle}>
                <Image
                    source={require('./../../assets/sakib.jpg')}
                    style={styles.imageStyle}
                />
            </View>
            <Text> </Text>
            <Text style={styles.textStyle}>  Name: Robiul Ahammed Sakib</Text>
            <Text style={styles.textStyle}>  SID: 170042058</Text>
            <Text style={styles.textStyle}>  Room no: N/A</Text>
            <Text style={styles.textStyle}>  Email: rabiulahmed.sakib@gmail.com</Text>
        </View>
    );
}

const styles=StyleSheet.create(
    {
        imageStyle:{
            height:270,
            width:220,
        },
        viewStyle:{
            justifyContent:'center',
            alignItems:'center',
        },
        textStyle:{
            fontSize:20,
            color:'black',
        },
    }
);
export default myProfile;