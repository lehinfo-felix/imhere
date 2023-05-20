import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

import { Home } from '../screens/Home'
import { Profile } from '../screens/Profile'
import { Notification } from '../screens/Notification'
import { Registration } from '../screens/Registration'

const Tab = createBottomTabNavigator()

export default function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: '#6B6B6B',
        tabBarStyle: {
          height: 60,
          paddingTop: 4,
          paddingBottom: 8,
          backgroundColor: '#09090b',
          borderTopColor: 'transparent',
          paddingHorizontal: 16,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
        },
      }}
    >
      <Tab.Screen
        name="Eventos"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="albums" size={size} color={color} />
          ), tabBarBadge: 0}}
      />
      <Tab.Screen
        name="Perfil"
        component={Profile}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="add-circle" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Registros"
        component={Registration}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="albums" size={size} color={color} />
          )}}
      />
      <Tab.Screen
        name="Notificações"
        component={Notification}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="notifications" size={size} color={color} />
          )}}
      />
    </Tab.Navigator>
  )
}