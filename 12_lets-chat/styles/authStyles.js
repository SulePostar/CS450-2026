import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  safeArea: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: 448,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '90%',
    margin: 'auto',
    backgroundColor: '#3a3a3a',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 24
  },
  subtitle: {
    color: 'rgba(255,255,255,0.75)',
    marginTop: 6,
    marginBottom: 18,
  },
  field: {
    marginBottom: 24,
  },
  label: {
    color: 'rgba(255,255,255,0.9)',
    marginBottom: 6,
    fontSize: 13,
    fontWeight: '600',
  },
  input: {
    height: 40,
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: 'rgba(255,255,255,0.16)',
    borderWidth: 1,
    borderColor: 'grey',
    color: '#FFFFFF'
  },
  row: {
    marginTop: 6,
    marginBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },
  rememberMe: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  rememberMeText: {
    color: 'rgba(255,255,255,0.9)',
    fontWeight: '600',
  },
  link: {
    color: '#8AB4FF',
    fontWeight: '700',
    justifyContent: 'right',
    alignItems: 'center'
  },
  primaryButton: {
    height: 48,
    borderRadius: 14,
    marginBottom: 12,
    backgroundColor: '#3A7BFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800'
  }
});

export default styles;