import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase-config";

export const createUserProfile = async (userId: string, data: any) => {
  const userRef = doc(db, "users", userId);
  await setDoc(userRef, data);
};

export const getUserProfile = async (userId: string) => {
  const userRef = doc(db, "users", userId);
  const userSnap = await getDoc(userRef);
  return userSnap.exists() ? userSnap.data() : null;
};

export const updateUserRoutine = async (
  userId: string,
  routineId: string,
  data: any
) => {
  const routineRef = doc(db, "users", userId, "routines", routineId);
  await updateDoc(routineRef, data);
};
