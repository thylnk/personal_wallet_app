import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import { useDispatch } from "react-redux";
import BoxItem from "~components/molecules/MoneyBox/BoxItem";
import { logout } from "~redux/slices/user.slice";
import api from "~shared/config/api";
import { SAVEMONEY } from "~shared/constants/endpoints";
import { container, flexRow, spacing, text, wrapperContainer } from "~shared/styles/common";
import { getAccessToken } from "~shared/utils/storerage";

const PlusSquare = () => <Icon name="plussquare" size={42} />

export default function MoneyBoxScreen({ navigation }) {
  const [isLoading, setIsLoading] = useState(true);
  const [listSave, setListSave] = useState([]);
  const dispatch = useDispatch();

  const fetchData = async () => {
    const access = await getAccessToken();
    try {
      while (isLoading) {
        const saveList = await api.get(SAVEMONEY, {
          headers: {
            Authorization: `Bearer ${access}`,
          },
        });
        setListSave(saveList.box_money);
      }
    } catch (error) {
      console.log(error);
      if (error.status === 401) {
        dispatch(logout());
      }
    }
  };

  useEffect(() => {
    setIsLoading(true);
    fetchData();
    return () => {
      setIsLoading(false);
    };
  }, []);

  return (
    <View style={styles.wrapperContainer}>
      {/* Top */}
      <View style={styles.flexRow}>
        <View style={{ alignContent: 'center' }}>
          <Text style={text.textHeading}>Money Box</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('AddMoneyBox', { title: 'Add New Money Box', action: 'add' })} >
          <PlusSquare />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.container}>
        <View style={spacing.my25}>
          <View>
            {listSave &&
              listSave.map((item) => {
                return (
                  <BoxItem
                    key={item.name + item.id}
                    name={item.name}
                    id={item.id}
                    goal={item.money_goal}
                    saving={item.saving_money}
                    navigation={navigation}
                  />
                );
              })}
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapperContainer: {
    ...wrapperContainer,
  },

  container: {
    ...container,
  },

  flexRow: {
    ...flexRow,
    paddingHorizontal: 35,
    marginTop: 55
  },

});
