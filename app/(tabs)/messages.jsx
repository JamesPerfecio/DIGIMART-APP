import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { useState } from 'react';

// Sample data for conversations
const conversations = [
  {
    id: '1',
    name: 'Reyna Queen',
    lastMessage: 'They will cower!',
    profileImage: require('../../assets/image/reyna.png'), 
    unread: true,
    timestamp: '12:45 PM',
  },
  {
    id: '2',
    name: 'Sage Roger',
    lastMessage: 'Your duty is not over!',
    profileImage: require('../../assets/image/sage.jpg'), 
    unread: true,
    timestamp: '12:34 PM',
  },
  {
    id: '3',
    name: 'Neon White',
    lastMessage: 'Hoy! I`m pissed!',
    profileImage: require('../../assets/image/neon.png'),
    unread: true,
    timestamp: '12:32 PM',
  },
  {
    id: '4',
    name: 'Deadlock Dour',
    lastMessage: 'Check out this link I sent you.',
    profileImage: require('../../assets/image/deadlock.jpg'), 
    unread: true,
    timestamp: '12:27 PM',
  },
  {
    id: '5',
    name: 'Cypher io',
    lastMessage: 'I know exactly where you are.',
    profileImage: require('../../assets/image/cypher.png'), 
    unread: true,
    timestamp: '12:21 PM',
  },
  {
    id: '6',
    name: 'Fade Awi',
    lastMessage: 'Check out this link I sent you.',
    profileImage: require('../../assets/image/fade.jpg'),
    unread: true,
    timestamp: '10:00 PM',
  },
  {
    id: '7',
    name: 'Kay O',
    lastMessage: 'You are powerless!',
    profileImage: require('../../assets/image/kayo.jpg'), 
    unread: true,
    timestamp: '9:45 AM',
  },
  {
    id: '8',
    name: 'Kj Hehe',
    lastMessage: 'Initiated!',
    profileImage: require('../../assets/image/kj.jpg'), 
    unread: true,
    timestamp: '9:15 PM',
  },
  {
    id: '9',
    name: 'Omen Dora',
    lastMessage: 'Scatter!',
    profileImage: require('../../assets/image/omen.jpg'), 
    unread: true,
    timestamp: '9:05 AM',
  },
  {
    id: '10',
    name: 'Sky Fall',
    lastMessage: 'Seek them out.',
    profileImage: require('../../assets/image/sky.jpg'), 
    unread: true,
    timestamp: '8:51 PM',
  },
  {
    id: '11',
    name: 'Sova Dabi',
    lastMessage: 'I am the hunter!',
    profileImage: require('../../assets/image/sova.jpg'), 
    unread: true,
    timestamp: '8:05 PM',
  },
  {
    id: '12',
    name: 'Jett Pleen',
    lastMessage: 'Watch this!',
    profileImage: require('../../assets/image/jett.jpg'), 
    unread: true,
    timestamp: '6:23 AM',
  },

];



// Component for rendering a single conversation
const ConversationCard = ({ conversation, onPress, selected }) => {
  return (
    <TouchableOpacity
      style={[styles.conversationCard, selected ? styles.selectedCard : null]}
      onPress={onPress}
    >
      <Image
        source={conversation.profileImage || defaultAvatar}
        style={styles.profileImage}
        resizeMode="cover"
      />
      <View style={styles.textContainer}>
        <Text style={[styles.name, conversation.unread ? styles.unreadText : null]}>
          {conversation.name}
        </Text>
        <Text style={styles.lastMessage} numberOfLines={1}>
          {conversation.lastMessage}
        </Text>
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.timestamp}>{conversation.timestamp}</Text>
        {conversation.unread && <View style={styles.unreadIndicator} />}
      </View>
    </TouchableOpacity>
  );
};

const Messages = () => {
  const [selectedConversation, setSelectedConversation] = useState(null);

  const renderConversation = ({ item }) => (
    <ConversationCard
      conversation={item}
      selected={item.id === selectedConversation}
      onPress={() => {
        console.log(`Open conversation with ${item.name}`);
        setSelectedConversation(item.id);
        // Navigate to chat screen here
      }}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={conversations}
        keyExtractor={(item) => item.id}
        renderItem={renderConversation}
        showsVerticalScrollIndicator={false}
        extraData={selectedConversation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a3c9f1', // Soft background color
    padding: 10,
  },
  conversationCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    marginVertical: 5,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  selectedCard: {
    backgroundColor: '#cdeff9', // Highlight selected conversation
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  lastMessage: {
    fontSize: 14,
    color: '#555',
  },
  unreadText: {
    color: '#000', // Bold or darker color for unread conversations
    fontWeight: 'bold',
  },
  rightContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  timestamp: {
    fontSize: 12,
    color: '#888',
    marginBottom: 5,
  },
  unreadIndicator: {
    width: 10,
    height: 10,
    backgroundColor: '#ff3b30',
    borderRadius: 5,
    marginTop: 5,
  },
});

export default Messages;