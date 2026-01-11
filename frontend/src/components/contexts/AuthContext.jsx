import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../helpers/Firebase";

const AuthContext = createContext();

export function AuthProvider({ children }) {
	const [user, setUser] = useState(null);
	const [dbUser, setDbUser] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
			setUser(currentUser);
			if (currentUser) {
				const snap = await getDoc(doc(db, "users", currentUser.uid));
				setDbUser(snap.exists() ? snap.data() : null);
			} else {
				setDbUser(null);
			}
			setLoading(false);
		});

		return unsubscribe;
	}, []);

	return <AuthContext.Provider value={{ user, dbUser, loading }}>{!loading && children}</AuthContext.Provider>;
}

export function useAuth() {
	return useContext(AuthContext);
}
