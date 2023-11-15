import * as React from "react"
import Svg, { Path } from "react-native-svg"

interface IPattern {
    PatternHeight: number
    PatternWidth: number
    color: string
}

const Pattern = (props: IPattern) => (
    <Svg width={props.PatternWidth} height={props.PatternHeight} fill="none" {...props}>
        <Path d="M27.8619 76.6897C24.6509 67.2814 29.6748 57.0515 39.083 53.8405L56.9938 47.7277C66.4021 44.5167 76.632 49.5406 79.843 58.9489L81.6436 64.2248C84.8546 73.6331 79.8307 83.863 70.4224 87.074L52.5117 93.1868C43.1034 96.3978 32.8735 91.3739 29.6625 81.9656L27.8619 76.6897Z" fill={props.color} />
        <Path d="M2.68849 113.709C-1.00547 109.603 -0.671694 103.28 3.43398 99.5862L14.0046 90.0756C18.1102 86.3816 24.4331 86.7154 28.127 90.8211L32.272 95.428C35.9659 99.5337 35.6322 105.857 31.5265 109.55L20.9559 119.061C16.8502 122.755 10.5274 122.421 6.83343 118.316L2.68849 113.709Z" fill={props.color} />
        <Path d="M39.9184 124.995C35.7848 117.112 38.8243 107.371 46.7073 103.237L59.0335 96.7736C66.9166 92.64 76.658 95.6795 80.7916 103.563C84.9252 111.446 81.8857 121.187 74.0027 125.321L61.6765 131.784C53.7935 135.918 44.052 132.878 39.9184 124.995Z" fill={props.color} />
        <Path d="M83.3749 84.3473C83.9579 76.6374 90.6807 70.8598 98.3907 71.4429L116.491 72.8116C124.201 73.3946 129.978 80.1175 129.395 87.8274L129.076 92.049C128.493 99.759 121.77 105.536 114.06 104.953L95.9601 103.585C88.2501 103.002 82.4726 96.2789 83.0556 88.5689L83.3749 84.3473Z" fill={props.color} />
        <Path d="M97.3287 64.6332C85.2719 58.1517 80.7523 43.1236 87.2338 31.0668L96.4997 13.8306C102.981 1.7739 118.009 -2.74572 130.066 3.73576C142.123 10.2172 146.642 25.2454 140.161 37.3021L130.895 54.5384C124.414 66.5951 109.385 71.1147 97.3287 64.6332Z" fill={props.color} />
        <Path d="M173.917 125.013C162.601 129.436 149.841 123.847 145.418 112.53L134.331 84.1606C129.908 72.8439 135.496 60.0845 146.813 55.6615L155.004 52.46C166.321 48.0371 179.08 53.6256 183.503 64.9423L194.591 93.3121C199.014 104.629 193.426 117.388 182.109 121.811L173.917 125.013Z" fill={props.color} />
        <Path d="M162.106 185.496C149.685 199.996 127.861 201.682 113.36 189.262L94.2957 172.932C79.795 160.511 78.1088 138.687 90.5296 124.186C102.95 109.685 124.775 107.999 139.275 120.42L158.34 136.75C172.84 149.171 174.527 170.995 162.106 185.496Z" fill={props.color} />
        <Path d="M98.0744 181.502C104.796 190.954 102.583 204.066 93.1304 210.787L81.4563 219.089C72.0041 225.811 58.8925 223.598 52.1708 214.145C45.4491 204.693 47.6626 191.582 57.1148 184.86L68.7889 176.558C78.2411 169.836 91.3526 172.05 98.0744 181.502Z" fill={props.color} />
        <Path d="M224.074 125.502C230.796 134.954 228.583 148.066 219.13 154.787L207.456 163.089C198.004 169.811 184.893 167.598 178.171 158.145C171.449 148.693 173.663 135.582 183.115 128.86L194.789 120.558C204.241 113.836 217.353 116.05 224.074 125.502Z" fill={props.color} />
        <Path d="M224.542 194.971C224.421 206.569 214.922 215.873 203.324 215.753L189 215.605C177.402 215.484 168.097 205.985 168.218 194.387C168.338 182.789 177.838 173.485 189.435 173.605L203.76 173.753C215.358 173.874 224.662 183.373 224.542 194.971Z" fill={props.color} />
        <Path d="M130.072 254.733C119.572 258.735 107.816 253.467 103.814 242.967L98.2461 228.358C94.2442 217.858 99.512 206.102 110.012 202.1C120.512 198.098 132.268 203.366 136.27 213.866L141.838 228.475C145.84 238.975 140.572 250.732 130.072 254.733Z" fill={props.color} />
        <Path d="M60.4667 276.796C50.5584 271.496 46.8229 259.167 52.1232 249.259L59.4979 235.473C64.7982 225.564 77.1273 221.829 87.0356 227.129C96.9438 232.429 100.679 244.759 95.379 254.667L88.0043 268.453C82.704 278.361 70.375 282.097 60.4667 276.796Z" fill={props.color} />
    </Svg>
)
export default Pattern
