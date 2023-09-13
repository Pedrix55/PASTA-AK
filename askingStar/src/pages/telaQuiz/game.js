
import { View, Text, Pressable, Modal, StyleSheet } from "react-native";
import React from "react";
import Constants from "expo-constants";
import AlternativasComponent from "../../Components/alternativaComponent";
import Buttoncomponent from "../../Components/buttonComponent";
import { TEMA_CORES } from "../../styles/color";
import { useState } from "react";
import requestsQuestions from "../../services/questions";
import axios from "axios";

const Quiz = ({ navigation, route }) => {
  const { id } = route.params;

  const button_list = [
    { label: "140 caixas", value: "a" },
    { label: "240 caixas", value: "b" },
    { label: "150 caixas", value: "c" },
    { label: "250 caixas", value: "d" },
  ];

  React.useEffect(() => {
    (async () => {
      const response = requestsQuestions.portuguesList();
      console.log(response);
    })();
  }, []);

  const [modalVisivel, setModalVisivel] = useState(false);
  const [question, setQuestion] = useState()

 async function handleQuestion({question}) {

  await axios.post("url", { 
    questionSelect: question
  })
    
  }


  return (

    <View style={{
      backgroundColor: '#04154F',
      flex: 1,

    }}>

      <View style={{
        alignItems: 'stretch',
        textAling: "center",
        backgroundColor: "#102261",
        height: "8%",
        justifyContent: "center",
        marginTop: Constants.statusBarHeight,
        padding: 20,
        width: "100%"
      }}>

        <Text style={{
          fontSize: 25,
          color: "white",
        }}>Matématica </Text>

      </View>

      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

      }}>


        <View style={{
          height: '70%',
          padding: 30,

        }}>

          <Text style={{
            color: "#D9D9D9",
            fontSize: 20
          }}>
            1. Ana tem 3000 empadas para entregar. Ela tem que armazena-las em caixas que comportam apenas 12. Quantas caixas ela precisará para entregar as empadas?
          </Text>

          <View style={{
            height: 250,

          }}>
            <View style={{}}>

              <View style={{ height: "100%" }}>
                <AlternativasComponent
                question={question}
                  setQuestion={setQuestion}
                  Array={button_list}
                />
              </View>
              <View style={{ marginTop: 20 }}>
                <Buttoncomponent
                  buttonColor={TEMA_CORES.complement.secundarylesc}
                  color="#D9D9D9"
                  fpress={() => handleQuestion({question: question})}
                  title="Submit"
                />
              </View>

            </View>



          </View>
        </View>
      </View>
    </View>



  );
};
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    width: 200,
    height: 200,
    backgroundColor: "white",
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    position: "absolute",

  }
})
export default Quiz;
