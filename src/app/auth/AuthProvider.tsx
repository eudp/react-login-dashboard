import { createContext } from "react";
import User from "../types/user";
import { useLocalStorage } from "../hooks";

export const AuthContext = createContext<{
  user: User | null;
  login: (data: User) => Promise<void>;
  logout: () => void;
} | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useLocalStorage<User>("user", null);

  const login = async (data: User) => {
    setUser(data);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
