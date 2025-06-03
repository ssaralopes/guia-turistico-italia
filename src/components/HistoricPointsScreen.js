import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function HistoricPointsScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Pontos Históricos</Text>
      <Text style={styles.item}>
        🏛️ Coliseu (Roma) - O maior anfiteatro já construído, símbolo do Império Romano.
      </Text>
      <View style={styles.separator} />

      <Text style={styles.item}>
        🗼 Torre de Pisa - Famosa pela sua inclinação, ícone arquitetônico da Toscana.
      </Text>
      <View style={styles.separator} />

      <Text style={styles.item}>
        🏰 Catedral de Florença - Também conhecida como Duomo, com sua magnífica cúpula.
      </Text>
      <View style={styles.separator} />

      <Text style={styles.item}>
        ⛲ Fontana di Trevi - Uma das fontes mais famosas do mundo, em Roma.
      </Text>
      <View style={styles.separator} />

      <Text style={styles.item}>
        🎨 Vaticano e Capela Sistina - Lar das obras de Michelangelo e do Papa.
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
