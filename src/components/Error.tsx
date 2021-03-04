type ErrorProps = {
  message?: string;
};

const Error: React.FC<ErrorProps> = ({ message }) => {
  return <div>Oops... {message}</div>;
};

export default Error;
