import React from 'react';
import {Text, View,} from 'react-native';
import GalaryImages from './GalaryImages';

const gallery = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={{fontSize: 24, fontWeight: '800'}}>Gallery</Text>
        <Text style={{fontSize: 16, fontWeight: '500', color: 'green'}}>
          VIEW ALL
        </Text>
      </View>
      <View>
        <GalaryImages />
      </View>
    </View>
  );
};


export default gallery;
