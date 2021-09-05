import React from 'react'
import { useEffect, useState } from 'react'
import { Platform, Dimensions, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { Icon } from 'react-native-elements';
// @ts-ignore 
import MapImg from '../../assets/WorldMap/WorldMap.png'
import DBHandleInstance from '../../persistence/DBHandler'

import {
    BackgroundView,
    TitleText,
    Image,
    ButtonNextTab,
    TabText,
    RowElement,
    DataListTable,
} from './styles'

const ProfileScreen = ({navigation, route}) => {

  const [rowsData, setRowsData] = useState([]);
  const [rowNumber, setRowNumber] = useState(0);

  useEffect(() => {
    DBHandleInstance.AllUserRowsDB().then((rowsDataDB) => {
      if (rowsDataDB != []){
        setRowsData(rowsDataDB);
        setRowNumber(rowsDataDB.length);
      }
      else{
        setRowsData([]);
        setRowNumber(0);
      }
    });
  }, []);

  var contactstring = (rowNumber === 1) ? "Contact" : "Contacts";
  var {
    width,
    height
  } = Dimensions.get('window');

  const handleMoreClick = (indexProp:any) => {
    // Parse out id
    navigation.navigate('MoreInformation', {id: indexProp});
  }

  const id = 0;
  const { name } = route.params;
  return (
    <BackgroundView>
      <TitleText>This is {name}'s profile</TitleText>
          <Image source={MapImg} style={{maxHeight:50, maxWidth: 50}}/>
          <RowElement key={id} style={{maxHeight: height - (height*.25) }}>
          <View style={{ minWidth: width-20, alignItems: 'center', justifyContent: 'center' }}>
              <View style={{ alignItems: 'center', justifyContent: 'center',  flexDirection: 'row' }}>
                  <View style={{ flex: 1, borderWidth: 4  }}>
                      <TitleText >You Have {rowNumber} {contactstring} </TitleText>
                  </View>
              </View>
              
              <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row' }}>
                  <View style={{ flex: 1, alignSelf: 'stretch',  borderWidth: 4, height: 50 }}> 
                      <Text style={{ fontWeight: 'bold' }}>Name</Text>
                  </View>
                  <View style={{ flex: 1, alignSelf: 'stretch',  borderWidth: 4, height: 50 }}>
                      <Text style={{ fontWeight: 'bold' }}>Been Awhile</Text>
                  </View>
                  <View style={{ flex: 1, alignSelf: 'stretch',  borderWidth: 4, height: 50 }}>
                      <Text style={{ fontWeight: 'bold' }}>More...</Text>
                  </View>
              </View>

                <DataListTable
                data={rowsData}
                // @ts-ignore 
                keyExtractor={item => (Platform.OS === "web") ? item.person_id.toString() : item.id.toString() }
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                // @ts-ignore
                <View key={(Platform.OS === "web") ? item.person_id.toString() : item.id.toString() } style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row', padding: 1}}>
                  <View style={{ flex: 1, alignSelf: 'stretch',    backgroundColor: "#d6ff84",
                  borderWidth: 5, }}><Text style={{ color: 'black' }}>{item.first_name}</Text></View>
                  <View style={{ flex: 1, alignSelf: 'stretch',    backgroundColor: "#d6ff84",
                  borderWidth: 5, }}><Text style={{ color: 'black' }}>{item.been_awhile}</Text></View>
                  <View style={{ flex: 1, alignSelf: 'stretch',    backgroundColor: "#d6ff84",
                  borderWidth: 5, }}>
                    <TouchableOpacity style={{flex: 1, alignSelf: 'stretch', flexDirection: 'row'}} onPress={ () => handleMoreClick((Platform.OS === "web") ? item.person_id.toString() : item.id.toString())} >
                      <Icon  name='sc-telegram'  type='evilicon'  color='#f5ad44'/>
                    </TouchableOpacity>
                  </View>
                </View> )} />

            </View>
          </RowElement>
          <View style={{ position: 'absolute', top: (Platform.OS === "web") ? -1 : height - 45, width: width, flex: 1, alignSelf: 'stretch', flexDirection: 'row', padding: 1}}>
            <ButtonNextTab onPress={() => navigation.navigate('Home', {})}>
              <TabText>Home</TabText>
            </ButtonNextTab>
            <ButtonNextTab onPress={() => navigation.navigate('BeenAwhile', {})}>
              <TabText>Been Awhile</TabText>
            </ButtonNextTab>
            <ButtonNextTab onPress={() => navigation.navigate('AddContact', {})}>
              <TabText>Add Contact</TabText>
            </ButtonNextTab>
            <ButtonNextTab onPress={() => navigation.navigate('Profile', {})}>
              <TabText>Profile</TabText>
            </ButtonNextTab>
          </View>
    </BackgroundView>

  );

}

export default ProfileScreen