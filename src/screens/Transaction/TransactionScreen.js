import { useState, useEffect } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import { useDispatch } from "react-redux";
import TransactionItem from "~components/molecules/Transaction/TransactionItem.js";
import api from "~shared/config/api";
import { TRANSACTION } from "~shared/constants/endpoints";
import { container, flexRow, spacing, text, wrapperContainer } from "~shared/styles/common";
import { getAccessToken } from "~shared/utils/storerage";

const PlusSquare = () => <Icon name="plussquare" size={42} />

export default function TransactionScreen({ navigation }) {

  const dispatch = useDispatch();
  const [listTrans, setListTrans] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchAllTrans = async () => {
    const access = await getAccessToken();
    try {
      while (isLoading) {
        const res = await api.get(TRANSACTION, {
          headers: {
            Authorization: 'Bearer ' + access
          }
        });
        setListTrans(res);
      }
    } catch (error) {
      console.log(error)
      if (error.response.status === 401) {
        dispatch(logout())
      }
    }
  }

  useEffect(() => {
    setIsLoading(true)
    fetchAllTrans();
    return () => {
      setIsLoading(false)
    }
  }, []);

  return (
    <View style={styles.wrapperContainer}>
      {/* Top */}
      <View style={[styles.flexRow]}>
        <View style={styles.wrapperTitle}>
          <Text style={text.textHeading}>Transactions</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('ModalScreen', { title: 'Add New Transaction', action: 'add' })} >
          <PlusSquare />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.container}>
        <View style={spacing.my25}>
          <View>
            {
              listTrans?.map((item) => {
                return <TransactionItem type={+item.type_id} money={item.money} key={item.id + item.name} setIsLoading={setIsLoading} id={item.id} navigation={navigation} />
              })
            }
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
