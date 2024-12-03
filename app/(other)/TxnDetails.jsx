import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "../../components/BackButton";
import { getDarkModeColor } from "../../constants/randomColor";
import { icons } from "../../constants";

const TxnDetails = () => {
  const categories = [
    {
      id: 1,
      name: "Subscription",
    },
    {
      id: 2,
      name: "Insurance",
    },
    {
      id: 3,
      name: "Rent",
    },
    {
      id: 4,
      name: "Food",
    },
    {
      id: 5,
      name: "Bills",
    },
  ];
  const dateJson = [
    {
      id: 1,
      type: "Subscription",
      transactions: [
        {
          id: 1,
          name: "Netflix",
          date: "Feb 07, 2:34 PM",
          amount: 190,
        },
        {
          id: 2,
          name: "Hotstar",
          date: "Feb 11, 4:30 PM",
          amount: 150,
        },
        {
          id: 3,
          name: "Jio Cinema",
          date: "Feb 17, 2:34 PM",
          amount: 120,
        },
        {
          id: 4,
          name: "Cibil",
          date: "Feb 18, 2:14 PM",
          amount: 200,
        },
      ],
    },
    {
      id: 2,
      type: "Insurance",
      transactions: [
        {
          id: 1,
          name: "Bike",
          date: "Feb 07, 2:34 PM",
          amount: 870,
        },
        {
          id: 2,
          name: "Car",
          date: "Feb 11, 4:30 PM",
          amount: 1800,
        },
      ],
    },
  ];

  const [catSelect, setCatSelect] = useState(categories[0]);
  const [catData, setCatData] = useState("");
  const handleCatSelect = (cat) => {
    setCatSelect(cat);
  };
  useEffect(() => {
    const dat = dateJson.filter((data) => data.id == catSelect.id);
    setCatData(dat);
  }, [catSelect]);

  return (
    <SafeAreaView className="bg-primary h-full">
      <View className="m-5">
        <BackButton navigation={"/Home"} />
        <FlatList
          data={categories}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={true}
          renderItem={({ item }) => (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => handleCatSelect(item)}
            >
              <Text
                className={`${
                  catSelect.id == item.id
                    ? `text-black bg-[#25a15b]`
                    : "text-white bg-[#1F1F1F]"
                } font-pregular rounded-xl`}
                style={styles.catStyle}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
        />
        <FlatList
          data={catData}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.topMargin} key={item.id}>
              <View className="bg-[#1F1F1F] rounded-xl p-3">
                <View className="d-flex flex-row justify-between">
                  <View className="d-flex flex-row gap-3">
                    <View
                      style={[styles.padding, { backgroundColor: `#c29e40` }]}
                    >
                      <Image
                        source={icons.notification}
                        className="w-10 h-8 my-auto"
                        resizeMode="contain"
                      />
                    </View>
                    <View>
                      <Text
                        style={styles.type}
                        className="text-white font-psemibold my-auto"
                      >
                        Insurance
                      </Text>
                      <Text
                        style={styles.typeHeading}
                        className="text-gray-100 font-pregular my-auto"
                      >
                        {item.type}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.alignBottom}>
                    <Text
                      className="text-gray-100 font-pregular"
                      style={styles.leftAmountType}
                    >
                      Left ₹ 200
                    </Text>
                  </View>
                </View>
                {/* <View>
                  <Text
                    style={styles.headingText}
                    className="text-white font-psemibold"
                  >
                    {item.type}
                  </Text>
                </View> */}
                <View className="mt-3">
                  {item.transactions.map((data) => (
                    <View
                      className="d-flex flex-row justify-between my-3"
                      key={data.id}
                    >
                      <View className="d-flex flex-row gap-3">
                        <Text
                          className="text-white my-auto p-3 rounded-xl max-w-full"
                          style={[styles.subHeadingText, {backgroundColor : getDarkModeColor(String(data.name).slice(0, 1).toLowerCase()) }]}
                        >
                          {data.name.slice(0, 1)}
                        </Text>
                        <View>
                          <Text
                            style={styles.subHeadingText}
                            className="text-gray-100 font-pregular"
                          >
                            {data.name}
                          </Text>
                          <Text
                            style={styles.paraText}
                            className="text-gray-400 font-pregular"
                          >
                            {data.date}
                          </Text>
                        </View>
                      </View>
                      <View style={styles.alignBottom}>
                        <Text
                          style={styles.leftAmount}
                          className="text-gray-100 font-psemibold"
                        >
                          ₹ {data.amount}
                        </Text>
                      </View>
                    </View>
                  ))}
                </View>
              </View>
            </View>
          )}
        />
        {!catData.length > 0 && (
          <Text className="text-blue-300">
            No records found for selected sub categories
          </Text>
        )}
      </View>
    </SafeAreaView>
  );
};

export default TxnDetails;

const styles = StyleSheet.create({
  topMargin: {
    marginTop: 25,
  },
  headingText: {
    fontSize: 22,
    textAlign: "justify",
  },
  subHeadingText: {
    fontSize: 16,
    textAlign: "justify",
    fontWeight: "700",
  },
  typeHeading: {
    fontSize: 15,
  },
  paraText: {
    fontSize: 12,
  },
  leftAmount: {
    fontSize: 16,
    textAlign: "justify",
  },
  leftAmountType: {
    fontSize: 12,
    textAlign: "justify",
  },
  alignBottom: {
    alignSelf: "flex-end",
    marginTop: "auto",
  },
  catStyle: {
    padding: 9.5,
    fontSize: 14,
    margin: 10,
    fontWeight: "700",
  },
  type: {
    fontSize: 18,
  },
  padding: {
    padding: 6,
    borderRadius: 11,
  },
});
