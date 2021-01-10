import './App.css';

type Props = {
  isActive: boolean;
}

function LoadingBar({ isActive }: Props) {
  let stateCss = '';
  isActive ? stateCss = 'main-loading-bar' : stateCss = 'main-non-loading-bar'
  return (
    <div
      className={stateCss}
    >
    </div>
  );
}

export default LoadingBar;
