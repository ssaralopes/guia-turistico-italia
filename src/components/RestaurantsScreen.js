import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function RestaurantsScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Restaurantes Recomendados</Text>
      <Text style={styles.item}>
        🍕 Trattoria Roma - Pasta artesanal e vinho local (€€)
      </Text>
      <View style={styles.separator} />

      <Text style={styles.item}>
        🍝 Osteria Toscana - Receitas clássicas toscanas (€€€)
      </Text>
      <View style={styles.separator} />

      <Text style={styles.item}>
        🍷 Ristorante Venezia - Frutos do mar e pratos venezianos (€€)
      </Text>
      <View style={styles.separator} />

      <Text style={styles.item}>
        🍰 Pasticceria Napoli - Doces típicos e café italiano (€)
      </Text>
      <View style={styles.separator} />

      <Text style={styles.item}>
        🥗 Agriturismo Umbria - Pratos orgânicos da fazenda (€€)
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
