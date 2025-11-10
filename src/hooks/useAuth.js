import { useState, useEffect } from "react"
import { useApp } from "@/context/AppContext"
import api from "@/lib/axios"

export const useAuth = () => {
  const { user, login, logout } = useApp()
  const [isAuthenticated, setIsAuthenticated] = useState(!!user)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setIsAuthenticated(!!user)
  }, [user])

  const signIn = async (email, password) => {
    setLoading(true)
    setError(null)
    try {
      const response = await api.post("/auth/login", { email, password })
      const { user: userData, token } = response.data
      
      localStorage.setItem("token", token)
      login(userData)
      
      return { success: true, data: response.data }
    } catch (err) {
      const errorMessage = err.response?.data?.message || "Login failed"
      setError(errorMessage)
      return { success: false, error: errorMessage }
    } finally {
      setLoading(false)
    }
  }

  const signOut = () => {
    logout()
    setIsAuthenticated(false)
  }

  const signUp = async (userData) => {
    setLoading(true)
    setError(null)
    try {
      const response = await api.post("/auth/register", userData)
      const { user: newUser, token } = response.data
      
      localStorage.setItem("token", token)
      login(newUser)
      
      return { success: true, data: response.data }
    } catch (err) {
      const errorMessage = err.response?.data?.message || "Registration failed"
      setError(errorMessage)
      return { success: false, error: errorMessage }
    } finally {
      setLoading(false)
    }
  }

  return {
    user,
    isAuthenticated,
    loading,
    error,
    signIn,
    signOut,
    signUp,
  }
}

