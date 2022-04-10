import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';

const GalaryImages = () => {
  const images = [
    {
      id: 0,
      image:
        'https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80',
    },
    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
    },
  ];
  return (
    <ScrollView>
      <View
        style={{
          marginTop: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View>
          <Image
            source={{
              uri: images[0].image,
            }}
            style={styles.ptImg}
            resizeMode="contain"
          />
        </View>
        <View
          style={styles.viewColumn}>
          <Image
            source={{
              uri: images[1].image,
            }}
            style={styles.smImg}
            resizeMode="stretch"
          />
          <Image
            source={{
              uri: images[2].image,
            }}
            style={styles.smImg}
            resizeMode="stretch"
          />
        </View>
      </View>
      <View>
        <View style={{marginVertical: 10}}>
          <Image
            source={{
              uri: images[1].image,
            }}
            style={styles.lgImg}
            resizeMode="contain"
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View
          style={styles.viewColumn}>
          <Image
            source={{
              uri: images[1].image,
            }}
            style={styles.smImg}
            resizeMode="stretch"
          />
          <Image
            source={{
              uri: images[2].image,
            }}
            style={styles.smImg}
            resizeMode="stretch"
          />
        </View>
        <View>
          <Image
            source={{
              uri: images[0].image,
            }}
            style={styles.ptImg}
            resizeMode="contain"
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  smImg: {borderRadius: 10, width: 170, height: 120},
  lgImg: {width: '100%', borderRadius: 20, height: 220},
  ptImg: {width: 180, borderRadius: 20, height: 250},
  viewColumn: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

});

export default GalaryImages;
