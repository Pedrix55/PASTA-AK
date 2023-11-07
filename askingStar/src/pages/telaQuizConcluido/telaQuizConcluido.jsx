import { View, Text, ImageBackground } from "react-native";
import Buttoncomponent from "../../Components/buttonComponent";
import { TEMA_CORES } from "../../styles/color";

const QuizConcluido = ({route, navigation}) => {
    const {pontos, numQuestions} = route.params
    console.log(pontos);
    
  return (
    <View
      style={{
        flex: 1,
        height: "100%",
        backgroundColor: "red",
      }}
    >
      <ImageBackground
        resizeMode="cover"
        style={{ flex: 1 }}
        source={require("../../../img/fundoQuizConcluido.png")}
      >
        <View
          style={{
            flex: 1,
            gap: 10,
            justifyContent: "center",
            alignItems: "center",
            marginTop: "5%",
          }}
        >
          <View>
            <Text
              style={{
                color: "white",
                fontSize: 30,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              {" "}
            </Text>

            <Text
              style={{
                color: "white",
                textAlign: "center",
              }}
            >
              {" "}
              Quiz concluído com sucesso!{" "}
            </Text>

            <Text
              style={{
                color: "white",
                textAlign: "center",
                gap: 20,
              }}
            >
              {" "}
              Você acertou {pontos}/{numQuestions} das questões, agora é um(a) Super Estrela.{" "}
            </Text>

          </View>

          <View style={{ width: "60%" }}>
            <Buttoncomponent
              color={TEMA_CORES.primaryblue}
              buttonColor={TEMA_CORES.secundarypink}
              fpress={() => navigation.navigate("Materia")}
              title="Jogar Novamente"
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default QuizConcluido;
