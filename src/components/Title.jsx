import PropTypes from "prop-types";

function Title({ children }) {
  return (
    <h1 className="text-5xl text-slate-100 font-bold text-center">
      {children}
    </h1>
  );
}

Title.propTypes = {
  children: PropTypes.node.isRequired, // ou apenas PropTypes.node se quiser opcional
};

export default Title;
