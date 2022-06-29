import "./styles.css";

export default function BorderPreview({ borderRadius }) {
  return (
    <>
      <div style={{ borderRadius: borderRadius }} className="content_bloco">
        <div
          style={{ borderRadius: borderRadius }}
          className="content_bloco__TextArea"
        ></div>
      </div>
    </>
  );
}
