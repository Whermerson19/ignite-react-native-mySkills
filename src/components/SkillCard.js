import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export function SkillCard(props) {
  return (
    <TouchableOpacity
      key={Math.floor(Math.random() * 345934)}
      style={styles.skillButton}
      activeOpacity={0.6}>
      <Text style={styles.skillText}>{props.skill}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  skillText: {
    color: '#fff',

    fontSize: 20,
    fontWeight: 'bold',
  },
  skillButton: {
    backgroundColor: '#1f1e25',
    padding: 20,
    marginTop: 20,
    alignItems: 'center',
    borderRadius: 30,
  },
});
