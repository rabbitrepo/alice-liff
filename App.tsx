import { useEffect, useState } from "react";
import liff from "@line/liff";
import "./App.css";

function App() {
  //login
  const [init, setInit] = useState(false);
  const [error, setError] = useState("");

  const [os, setOS] = useState("");
  const [id, setId] = useState("");
  const [name, setName] = useState("");

  // async function getOS() {
  //   const userOS = await liff.getOS();
  //   setOS(userOS);
  // }

  // async function getProfile() {
  //   const userProfile = await liff.getProfile();
  //   setProfile(userProfile);
  // }

  useEffect(() => {
    liff
      .init({
        liffId: import.meta.env.VITE_LIFF_ID,
      })
      .then(() => {
        setInit(true);
      })
      .catch((e: Error) => {
        setError(`${e}`);
      });
  }, []);

  useEffect(() => {
    liff.ready.then(() => {
      // getOS();
      setOS(liff.getOS());

      liff.getProfile().then((profile) => {
        const userId = profile.userId;
        const displayName = profile.displayName;
        setId(userId);
        setName(displayName);
      });
    });
  });

  return (
    <div className="App">
      <h1>create-liff-app</h1>
      <p>init: {init.toString()}</p>
      <p>os: {os}</p>
      <p>id: {id}</p>
      <p>name: {name}</p>
    </div>
  );
}

export default App;
