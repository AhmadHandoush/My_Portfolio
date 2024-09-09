import "./title.css";

function Title({ title }) {
  return (
    <div className="title">
      <h1 className="text-4xl text-white relative ">{title}</h1>
    </div>
  );
}

export default Title;
