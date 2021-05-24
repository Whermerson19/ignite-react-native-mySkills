import React, {useState, useCallback} from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  FlatList,
} from 'react-native';

import {Button} from '../../components/Button';
import {SkillCard} from '../../components/SkillCard';

interface IMySkills {
  id: string;
  name: string;
}

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState<IMySkills[]>([]);

  const handleAddSkill = useCallback(() => {
    const data = {
      id: String(Math.floor(Math.random() * 398249)),
      name: newSkill,
    };

    setMySkills(oldState => [...oldState, data]);
  }, [newSkill]);

  const handleRemoveSkill = useCallback((id: string) => {
    setMySkills(oldState => oldState.filter(skill => skill.id !== id));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome, Whermerson Cavalcante</Text>
      <TextInput
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#555"
        autoCapitalize="none"
        onChangeText={setNewSkill}
      />

      <Button onPress={handleAddSkill} />

      <Text style={[styles.title, {marginTop: 50}]}>My Skills</Text>

      <FlatList
        data={mySkills}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <SkillCard
            onPress={() => handleRemoveSkill(item.id)}
            skill={item.name}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    padding: 30,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#fff',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 12,
    borderRadius: 7,
    marginTop: 30,
  },
});
