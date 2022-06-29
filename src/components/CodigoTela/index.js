import "./styles.css";

export default function CodeTela({ Code }) {
  return (
    <>
      <div className="container_CodeTela">
        <label> Codigo: </label>
        <textarea class="content_agroup__para" value={Code} disabled></textarea>
      </div>
    </>
  );
}
