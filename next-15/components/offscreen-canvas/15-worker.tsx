import { render } from "@react-three/offscreen"
import OffscreenScene from "./offscreen-scene"

console.log("OffscreenCanvas support:", typeof OffscreenCanvas !== "undefined")

render(<OffscreenScene />)
