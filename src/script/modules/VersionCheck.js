import { db } from "./Firebase";
import { getDoc, doc } from "firebase/firestore";

export async function versionCheck() {
  var temp = localStorage.getItem("version");
  const docSnap = await getDoc(doc(db, "AIO", "info"));

  if (docSnap.exists()) {
    console.log("Document Read Complete!");
    console.log(temp);
    console.log(docSnap.data().version);
    if (docSnap.data().version == temp) {
      console.log("버전 확인");
    } else {
      console.log("버전 다름!");
      localStorage.setItem("version", docSnap.data().version);
      window.location.reload(true);
    }
  } else {
    console.log("No Such Document!");
  }
}
