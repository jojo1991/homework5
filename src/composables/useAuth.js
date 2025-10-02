import { useRouter } from 'vue-router'
import { firebaseApp } from './useFirebase'
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { useAuth as useVueAuth } from '@vueuse/firebase/useAuth'

const auth = getAuth(firebaseApp)

export default function useAuth() {
  const router = useRouter()
  const { isAuthenticated, user } = useVueAuth(auth)

  // login
  const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
      return true
    } catch (err) {
      console.error(err)
      return false
    }
  }

  // logout
  const logout = async () => {
    await signOut(auth)
    router.push({ name: 'LoginPage' })
  }

  return {
    isAuthenticated,
    user,
    login,
    logout
  }
}
