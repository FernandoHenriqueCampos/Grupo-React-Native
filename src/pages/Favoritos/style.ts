import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', 
    paddingTop: 50, 
  },
  
 
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    paddingHorizontal: 15,
    paddingBottom: 15,
  },

 
  scrollContent: {
    paddingBottom: 20, 
  },

  
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
  },
  emptyText: {
    fontSize: 18,
    color: '#999',
    marginTop: 10,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    paddingHorizontal: 15,
    paddingBottom: 15,
  },
});