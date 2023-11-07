import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { TEMA_CORES } from '../styles/color';



const  Buttoncomponent = ({ fpress, stylebutton, title, color = TEMA_CORES.primaryblue, buttonColor=TEMA_CORES.secundarypink }) => {


    return (
        <View style={stylebutton}>
            <Button
             labelStyle={{fontWeight:"bold"}}
             title={title} 
             textColor={color} 
             onPress={fpress} 
             buttonColor={buttonColor}> {title} </Button>
        </View>


    )
}

export default Buttoncomponent;