import "./styles.css";
import BorderPreview from "./components/BorderPreview";
import CodeTela from "./components/CodigoTela";

import { useState } from "react";
export default function App() {
  const [besqs, setBesqs] = useState(0);
  const [bdirs, setBdirs] = useState(0);
  const [besqi, setBesqi] = useState(0);
  const [bdiri, setBdiri] = useState(0);

  return (
    <>
      <main className="main">
        <section className="container">
          <header className="header">
            <h1 className="header__tittle">Border - Radius ✨</h1>
            <p className="header__parag">
              ✨Experimente gerar os border radius aqui
            </p>
          </header>
          <section className="content">
            <hgroup className="content__agroup--up">
              <input
                className="content_agroup__item"
                placeholder="0"
                type="text"
                onChange={({ target }) => setBesqs(target.value)}
              />
              <input
                className="content_agroup__item"
                placeholder="0"
                type="text"
                onChange={({ target }) => setBdirs(target.value)}
              />
            </hgroup>
            <BorderPreview
              borderRadius={`${besqs}px ${bdirs}px ${bdiri}px ${besqi}px`}
            />
            <hgroup className="content__agroup--down">
              <input
                className="content_agroup__item"
                placeholder="0"
                type="text"
                onChange={({ target }) => setBesqi(target.value)}
              />
              <CodeTela
                Code={
                  `border-radius: ${besqs}px ${bdirs}px ${bdiri}px ${besqi}px; \n\n` +
                  `-webkit-border-radius: ${besqs}px ${bdirs}px ${bdiri}px ${besqi}px; \n\n` +
                  `-moz-border-radius: ${besqs}px ${bdirs}px ${bdiri}px ${besqi}px;`
                }
              />
              <input
                className="content_agroup__item"
                placeholder="0"
                type="text"
                onChange={({ target }) => setBdiri(target.value)}
              />
            </hgroup>
          </section>
        </section>
      </main>
    </>
  );
}
