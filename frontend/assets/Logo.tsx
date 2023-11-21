import * as React from "react"
import Svg, { Path, Rect } from "react-native-svg"

interface ILogo {
    LogoWidth: number
    LogoHeight: number
}

const Logo = (props: ILogo) => (
    <Svg width={props.LogoWidth} height={props.LogoHeight} fill="none" {...props}>
        <Rect width="114" height="114" rx="44" fill="#E2EEFF" />
        <Path
            d="M70.8862 36.135C67.0078 33.8668 62.3214 32.7327 56.8269 32.7327C50.4552 32.7327 45.5379 33.9593 42.0751 36.4127C38.6122 38.866 36.8807 42.0369 36.8807 45.9252C36.8807 47.1287 37.1578 48.4341 37.7118 49.8413C38.2659 51.2578 39.157 52.6835 40.3852 54.1185C41.6041 55.5534 43.0678 56.757 44.7761 57.729C46.0689 58.4697 47.4079 59.2103 48.7931 59.951C50.1782 60.6916 51.3002 61.2934 52.159 61.7563C53.0085 62.2192 53.8627 62.682 54.7215 63.1449C55.5711 63.6078 56.2406 63.9874 56.73 64.2837C57.2102 64.5892 57.6488 64.9132 58.0459 65.2557C58.4337 65.6075 58.7061 65.9547 58.8631 66.2973C59.0293 66.6491 59.1125 67.0333 59.1125 67.4499C59.1125 68.8848 58.0736 69.6023 55.9959 69.6023C53.7334 69.6023 50.7554 68.9867 47.0616 67.7554C43.3679 66.5333 41.0362 65.9223 40.0666 65.9223C38.7738 65.9223 37.7949 66.2788 37.1301 66.9916C36.456 67.7137 36.1189 68.5839 36.1189 69.6023C36.1189 70.5281 36.4652 71.5234 37.1578 72.588C37.8503 73.6527 38.88 74.6942 40.2467 75.7125C41.6041 76.7309 43.174 77.6567 44.9562 78.49C46.7292 79.3232 48.8069 79.9944 51.1894 80.5036C53.5626 81.0127 56.0189 81.2673 58.5584 81.2673C71.4403 81.2673 77.8813 76.4764 77.8813 66.8944C77.8813 64.4874 77.1656 62.358 75.7343 60.5064C74.303 58.6548 71.8097 56.7107 68.2545 54.674C67.1463 54.0259 65.7843 53.2714 64.1683 52.4104C62.5522 51.5587 61.2825 50.8782 60.3591 50.369C59.4357 49.8598 58.4891 49.2673 57.5195 48.5915C56.5499 47.9249 55.8435 47.2769 55.4002 46.6473C54.9662 46.027 54.7492 45.3698 54.7492 44.6754C54.7492 42.4535 56.1113 41.3425 58.8354 41.3425C60.5438 41.3425 62.4137 41.7684 64.4453 42.6201C66.4768 43.4811 68.3237 44.3375 69.9859 45.1892C71.6481 46.0502 72.8947 46.4807 73.7258 46.4807C74.2337 46.4807 74.7093 46.3742 75.1525 46.1613C75.5865 45.9576 75.9559 45.6104 76.2606 45.1197C76.5561 44.6383 76.7039 44.0505 76.7039 43.3561C76.7039 40.8102 74.7647 38.4031 70.8862 36.135Z"
            fill="#274CEE"
        />
    </Svg>
)
export default Logo