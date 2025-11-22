import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 8,
    marginHorizontal: 15,
    overflow: 'hidden',
    elevation: 3, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  touchableCard: {
    flexDirection: 'row',
    flex: 1, 
  },
  image: {
    width: 120,
    height: 120,
  },
  infoContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  name: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    color: '#333' 
  },
  details: { 
    fontSize: 14, 
    color: '#666', 
    marginVertical: 2 
  },
  distance: {
    fontSize: 12,
    color: '#999',
    marginTop: 5,
  },
  distanceContainer: { 
    marginTop: 5, 
    flexDirection: 'row', 
    alignItems: 'center' 
  },
  distanceText: { 
    fontSize: 12, 
    color: '#999', 
    fontStyle: 'italic',
    marginLeft: 4 
  },
  favoriteButton: {
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});