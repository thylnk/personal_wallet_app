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

  const fetchAllTrans = async () => {
    const access = await getAccessToken();
    console.log(access)
    try {
      const res = await api.get(TRANSACTION, {
        headers: {
          Authorization: 'Bearer ' + access
        }
      });
      setListTrans(res);
      console.log(res)
    } catch (error) {
      console.log(error)
      // if (error.response.status === 401) {
      //   dispatch(logout())
      // }
    }
  }

  useEffect(() => {
    fetchAllTrans()
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
            {/* <TouchableOpacity onPress={() => navigation.navigate('ModalScreen', { title: 'Edit Transaction', action: 'edit', id: 1 })} >
              <TransactionItem />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('ModalScreen', { title: 'Edit Transaction', action: 'edit', id: 1 })} >
              <TransactionItem />
            </TouchableOpacity> */}

            {
              listTrans && listTrans.map((item) => {
                // console.log(item.type)
                return <TransactionItem type={+item.type_id} money={item.money} key={item.type_id + item.name} />
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
