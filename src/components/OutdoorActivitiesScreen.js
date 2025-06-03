import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function OutdoorActivitiesScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Atividades ao Ar Livre</Text>
      <Text style={styles.item}>
        🚤 Passeio de gôndola em Veneza - Uma experiência romântica pelos canais.
      </Text>
      <View style={styles.separator} />
      
      <Text style={styles.item}>
        🥾 Trilhas na Costa Amalfitana - Cenários deslumbrantes e mar azul-turquesa.
      </Text>
      <View style={styles.separator} />
      <Text style={styles.item}>
        🍇 Visitar vinhedos na Toscana - Degustação de vinhos e tours guiados.
      </Text>
      <View style={styles.separator} />

      <Text style={styles.item}>
        🏖️ Praias da Sardenha - Águas cristalinas e areias brancas.
      </Text>
      <View style={styles.separator} />

      <Text style={styles.item}>
        🌻 Caminhar pelos campos floridos da Úmbria - Perfeito na primavera.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5DC',
    padding: 20,
  },
  title: {
    fontSize: 26,
    color: '#800000',
    fontWeight: 'bold',
    marginBottom: 25,
    textAlign: 'center',
  },
  item: {
    fontSize: 18,
    color: '#333',
    marginBottom: 12,
    lineHeight: 24,
  },
  separator: {
    height: 1,
    backgroundColor: '#C28840',
    marginVertical: 10,
    opacity: 0.5,
  },
});
