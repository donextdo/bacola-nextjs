// import Layout from "@/components/Layout/Layout";
// import "@/styles/globals.css";
// import type { AppProps } from "next/app";
// import { Provider } from "react-redux";
// import { store } from "../redux/store";
// import { PersistGate } from "redux-persist/integration/react";
// import { persistStore } from "redux-persist";

// export default function App({ Component, pageProps }: AppProps) {
//   let persistor = persistStore(store);

//   return (
//     <Provider store={store}>
//       <PersistGate  persistor={persistor}>
//       <Layout>
//         <Component {...pageProps} />
//       </Layout>
//       </PersistGate>
//     </Provider>
//   );
// }



import Layout from "@/components/Layout/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { store } from "../redux/store";
import { Provider } from "react-redux";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}