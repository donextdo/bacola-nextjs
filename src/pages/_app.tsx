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



// import Layout from "@/components/Layout/Layout";
// import "@/styles/globals.css";
// import type { AppProps } from "next/app";
// import { store } from "../redux/store";
// import { Provider } from "react-redux";



// export default function App({ Component, pageProps }: AppProps) {
//   return (
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//       <Layout>
//         <Component {...pageProps} />
//       </Layout>
//       </PersistGate>
//     </Provider>
//   );
// }