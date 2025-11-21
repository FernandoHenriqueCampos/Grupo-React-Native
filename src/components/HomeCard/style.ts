import { StyleSheet, Dimensions } from 'react-native';


export const styles = StyleSheet.create({
  container: {
    width: '80%',
    flexDirection: 'column', 
    backgroundColor: '#FFFFFF',
    borderRadius: 24, 
    marginBottom: 16, 
    marginLeft: 40,
    elevation: 8, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 24,
  },
  infoContainer: {
    padding: 16, 
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  name: {
    fontSize: 24, 
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  tag: {
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  tagText: {
    fontSize: 12,
    color: '#666',
    fontWeight: '600',
  },
  description: {
    fontSize: 16,
    color: '#7f8c8d',
    lineHeight: 24,
    marginTop: 4,
  }
});