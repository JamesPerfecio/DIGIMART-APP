// import { View, Text, Image} from 'react-native'
// import React from 'react'
// import  { Tabs, Redirect} from 'expo-router'

// import {icons} from '../../constants'

// const TabIcon = ({icon,color,name,focused}) =>{
//   return(
//     <View>
//       <Image
//         source={icon}
//         resizeMode="contain"
//         className="w-6 h-6"
//       />
//     </View>
//   )
// }

// const TabLayout=()=> {
//   return (
//     <>
//       <Tabs>
//         <Tabs.Screen
//           name="home"
//           options={{
//             title:'Home',
//             headerShows: false,
//             tabBarIcon:({color,focused})=>(
//               <TabIcon
//                 icon={icons.home}
//                 color={color}
//                 name="Home"
//                 focused={focused}
//               />
//             )
//           }}
//           /> //end oh home icon

// <Tabs.Screen
//           name="messages"
//           options={{
//             title:'Messages',
//             headerShows: false,
//             tabBarIcon:({color,focused})=>(
//               <TabIcon
//                 icon={icons.message}
//                 color={color}
//                 name="Messages"
//                 focused={focused}
//               />
//             )
//           }}
//           /> //end of messages icon

// <Tabs.Screen
//           name="shopping"
//           options={{
//             title:'Shopping',
//             headerShows: false,
//             tabBarIcon:({color,focused})=>(
//               <TabIcon
//                 icon={icons.shopping}
//                 color={color}
//                 name="Shopping"
//                 focused={focused}
//               />
//             )
//           }}
//           /> //end of shoppping icon
//     <Tabs.Screen
//           name="profile"
//           options={{
//             title:'Profile',
//             headerShows: false,
//             tabBarIcon:({color,focused})=>(
//               <TabIcon
//                 icon={icons.profile}
//                 color={color}
//                 name="Profile"
//                 focused={focused}
//               />
//             )
//           }}
//           /> //end of shoppping icon



//       </Tabs>
//     </>
//   )
// }

// export default TabLayout

// const TabsLayout=() =>{ 
//   return (
//   <View>
//     <Image
//       source={}
//     />
//   </View>
// )
// }









// import { View, Image } from 'react-native';
// import React from 'react';
// import { Tabs } from 'expo-router'; 
// import { icons } from '../../constants'; 

// // Tab Icon Component
// const TabIcon = ({ icon, color, focused }) => {
//   return (
//     <View>
//       <Image
//         source={icon}
//         resizeMode="contain"
//         style={{
//           width: 24, 
//           height: 24, 
//           tintColor: focused ? '#003366' : color, 
//         }}
//       />
//     </View>
//   );
// };


// const TabLayout = () => {
//   return (
//     <Tabs>
//       {/* Home Tab */}
//       <Tabs.Screen
//         name="home"
//         options={{
//           title: 'Home',
//           headerShown: false, 
//           tabBarIcon: ({ color, focused }) => (
//             <TabIcon
//               icon={icons.home} 
//               color={color}
//               focused={focused}
//             />
//           ),
//         }}
//       />
      
//       {/* Messages Tab */}
//       <Tabs.Screen
//         name="messages"
//         options={{
//           title: 'Messages',
//           headerShown: false, 
//           tabBarIcon: ({ color, focused }) => (
//             <TabIcon
//               icon={icons.message} 
//               color={color}
//               focused={focused}
//             />
//           ),
//         }}
//       />

//       {/* Shopping Tab */}
//       <Tabs.Screen
//         name="shopping"
//         options={{
//           title: 'Shopping',
//           headerShown: false, 
//           tabBarIcon: ({ color, focused }) => (
//             <TabIcon
//               icon={icons.shopping} 
//               color={color}
//               focused={focused}
//             />
//           ),
//         }}
//       />

//       {/* Profile Tab */}
//       <Tabs.Screen
//         name="profile"
//         options={{
//           title: 'Profile',
//           headerShown: false, 
//           tabBarIcon: ({ color, focused }) => (
//             <TabIcon
//               icon={icons.profile} 
//               color={color}
//               focused={focused}
//             />
//           ),
//         }}
//       />
//     </Tabs>
//   );
// };

// export default TabLayout;



import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Tabs } from 'expo-router'; 
import { icons } from '../../constants'; 

// Tab Icon Component
const TabIcon = ({ icon, color, focused }) => {
  return (
    <View style={styles.iconContainer}>
      <Image
        source={icon}
        resizeMode="contain"
        style={[
          styles.icon,
          { tintColor: focused ? '#003366' : color }
        ]}
      />
    </View>
  );
};

const TabLayout = () => {
  return (
    <Tabs>
      {/* Home Tab */}
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          headerShown: false, 
          tabBarIcon: props => <TabIcon icon={icons.home} {...props} />
        }}
      />
      
      {/* Messages Tab */}
      <Tabs.Screen
        name="messages"
        options={{
          title: 'Messages',
          headerShown: false, 
          tabBarIcon: props => <TabIcon icon={icons.message} {...props} />
        }}
      />

      {/* Shopping Tab */}
      <Tabs.Screen
        name="shopping"
        options={{
          title: 'Shopping',
          headerShown: false, 
          tabBarIcon: props => <TabIcon icon={icons.shopping} {...props} />
        }}
      />

      {/* Profile Tab */}
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerShown: false, 
          tabBarIcon: props => <TabIcon icon={icons.profile} {...props} />
        }}
      />
    </Tabs>
  );
};

// Styles
const styles = StyleSheet.create({
  iconContainer: {
    width: 24,
    height: 24,
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default TabLayout;
