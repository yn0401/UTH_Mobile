import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import Navigation from "./screens/navigation";

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <Navigation />
    </ApplicationProvider>
  );
}
