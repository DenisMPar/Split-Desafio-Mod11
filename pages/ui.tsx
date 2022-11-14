import { Button } from "../ui/button";
import Input from "../ui/input";

export default function Ui() {
  return (
    <div style={{ height: "100vh", backgroundColor: "#DBEAF2" }}>
      <h1 style={{ margin: "0" }}>UI Page</h1>
      <div>
        <form>
          <Input name="name" label="Name:" placeHolder="Your Name" />
          <Input name="email" label="Email:" placeHolder="Your Email" />
          <Button>Registrarme</Button>
        </form>
      </div>
    </div>
  );
}
