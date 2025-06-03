import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [pressedBtn, setPressedBtn] = useState(null);

  const handlePressIn = (btnName) => {
    setPressedBtn(btnName);
  };

  const handlePressOut = () => {
    setPressedBtn(null);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Italia: uma viagem sensorial</Text>
      <Text style={styles.subtitle}>
        Este não é um lugar no mapa — é um chamado. Uma travessia pela beleza que resiste ao tempo.
        Aqui, cada praça guarda histórias, cada aroma desperta memórias. O passado pulsa nas ruas, nas cúpulas e no som dos sinos.
        Perder-se nas vielas é viver um ritual, onde sabores são heranças e afetos.

        {'\n\n'}

        A vida se revela nos detalhes: no cheiro do pão, no gesto feito arte, no azul que abraça campos e catedrais.
        Aqui, beleza é essência.
        Essa viagem não é um destino — é um reencontro com o que torna a vida mais viva.

        {'\n\n'}

        <Text style={{ fontWeight: 'bold', color: '#4b5734' }}>
          Benvenuto. A Itália te espera.
        </Text>
      </Text>

      {['HistoricPoints', 'Restaurants', 'OutdoorActivities'].map((screenName, idx) => {
        const titles = ['Pontos Históricos', 'Restaurantes', 'Atividades ao Ar Livre'];
        const isPressed = pressedBtn === screenName;
        return (
          <TouchableOpacity
            key={screenName}
            style={[styles.button, isPressed && styles.buttonPressed]}
            onPress={() => navigation.navigate(screenName)}
            onPressIn={() => handlePressIn(screenName)}
            onPressOut={handlePressOut}
            activeOpacity={0.9}
          >
            <Text style={styles.buttonText}>{titles[idx]}</Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F5F5DC', // bege claro, suave e clássico
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 36,
    color: '#800000', // bordô (cor do header também)
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 30,
    color: '#556B2F', // verde oliva, trazendo natureza e história
    lineHeight: 24,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#932424', // vermelho escuro, forte e elegante
    paddingVertical: 18,
    paddingHorizontal: 25,
    marginVertical: 10,
    width: '80%',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#C28840', // dourado suave
    shadowColor: '#C28840', // sombra dourada para brilho mágico
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 7,
    elevation: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonPressed: {
    backgroundColor: '#ce5252', // vermelho mais claro para efeito
  },
  buttonText: {
    color: '#fff7ed', // texto bege claro para contraste 
    fontSize: 20,
    letterSpacing: 1,
  },
});