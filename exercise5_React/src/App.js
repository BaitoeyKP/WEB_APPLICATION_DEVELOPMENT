import "./App.css";
import Box from "./box";

function App() {
  return (
    <div className="App">
      <h1 id="header">โหวตอาหาร</h1>
      <Box
        type="อาหารคาว"
        menu="ข้าวผัด"
        detail="Nunc nibh tortor, tincidunt nec est eu, scelerisque tincidunt velit. Cras posuere eu velit non cursus. Vestibulum gravida, tellus nec congue egestas, odio mi ullamcorper tortor, at aliquam nulla est non ex. Ut aliquet sollicitudin nulla sit amet rhoncus. Duis nec mauris lorem. In pulvinar leo in velit elementum lacinia. Ut ullamcorper, eros quis ultrices aliquam, lectus orci dignissim lectus, varius condimentum lorem est in massa."
        pic="http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQ8_Ra6LzfCu3LDBM_D-wSpQ-4lwTgBmvLMxYKHGbjjaTBlKHxX5istKDFtvd5uiqcTn0PavDK5kRmSFOk"
      />
      <Box
        type="อาหารหวาน"
        menu="บัวลอย"
        detail="Quisque tristique facilisis varius. Pellentesque bibendum urna ac justo semper efficitur. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent at congue metus, a consectetur dui. Cras ut euismod enim. Fusce tristique tristique fringilla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
        pic="https://img.kapook.com/u/2022/wanwanat/1079595941.jpg"
      />
    </div>
  );
}

export default App;
