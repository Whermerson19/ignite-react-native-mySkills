import React from 'react';
import {TouchableOpacity, Text, StyleSheet, TouchableOpacityProps} from 'react-native';

interface ISkillCardProps extends TouchableOpacityProps {
  skill: string;
}

export function SkillCard({skill, ...rest}: ISkillCardProps) {
  return (
    <TouchableOpacity
      key={Math.floor(Math.random() * 345934)}
      style={styles.skillButton}
      activeOpacity={0.6}
      {...rest}>
      <Text style={styles.skillText}>{skill}</Text>
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
