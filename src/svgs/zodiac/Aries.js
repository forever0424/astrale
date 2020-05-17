import * as React from "react"
import Svg, {G, Path, Rect} from "react-native-svg"
import PropTypes from "prop-types";

function Aries({color, height, width, style}) {
    return (
        <Svg height={height} width={width} viewBox="0 0 512 512" style={style}>
            <G fill="#46349e">
                <Path
                    d="M104 232a24 24 0 00-24 24v50.335a32 32 0 0020.115 29.711L120 344v-40l-8-8v-24h72l24-32v-8zM384 288l48 38.593C424 344 398.767 346.634 384 336l-24-16v-32zM280 312v46.059A81.941 81.941 0 00304 416l-24 48-1.689.845A25.887 25.887 0 00264 488h40l40-64V312zM80 104v8a24 24 0 0024 24h8v-32z"/>
            </G>
            <Path
                d="M392 376v-65.5a48 48 0 00-37.587-46.857L320 256l-72-56-27.692-66.462A48 48 0 00176 104h-64v48l24 48h32v56h-8a24 24 0 00-24 24v50.335a32 32 0 0020.115 29.711L176 368v-40l-8-8v-24h26.667l14.284 21.427a32 32 0 0019.431 13.43L320 352a64.721 64.721 0 0035.777 57.888L384 424l-24 40-1.689.845A25.887 25.887 0 00344 488h40l48-72z"
                fill="#5f4bbc"
            />
            <Path
                d="M232 84a45.309 45.309 0 01-25.04 40.52L184 136l7.06-14.11A84.621 84.621 0 00200 84a20 20 0 00-40 0v20h-48V84c0-1.34.04-2.68.14-4a59.8 59.8 0 0117.43-38.43c1.37-1.37 2.81-2.68 4.31-3.91A59.851 59.851 0 01168 24.14c1.32-.1 2.66-.14 4-.14a59.775 59.775 0 0136.39 12.29 59.881 59.881 0 0111.32 11.32A59.74 59.74 0 01232 84z"
                fill="#a961b2"
            />
            <Path
                d="M136 64v16h-23.86a59.426 59.426 0 013.28-16zM159.16 52.42l-14.32 7.16-10.96-21.92a59.6 59.6 0 0113.67-8.46zM184 25.2V48h-16V24.14c1.32-.1 2.66-.14 4-.14a60.075 60.075 0 0112 1.2zM219.71 47.61l-14.05 14.05-11.32-11.32 14.05-14.05a59.881 59.881 0 0111.32 11.32z"
                fill="#b267ba"
            />
            <Path
                d="M272 84a45.309 45.309 0 01-25.04 40.52L224 136l7.06-14.11A84.621 84.621 0 00240 84a20 20 0 00-40 0v20h-48V84c0-1.34.04-2.68.14-4a59.8 59.8 0 0117.43-38.43c1.37-1.37 2.81-2.68 4.31-3.91A59.851 59.851 0 01208 24.14c1.32-.1 2.66-.14 4-.14a59.793 59.793 0 0136.25 12.18 61.011 61.011 0 016.18 5.39 59.159 59.159 0 015.17 5.9A59.773 59.773 0 01272 84z"
                fill="#c378cb"
            />
            <Path
                d="M176 64v16h-23.86a59.426 59.426 0 013.28-16zM199.16 52.42l-14.32 7.16-10.96-21.92a59.6 59.6 0 0113.67-8.46zM224 25.2V48h-16V24.14c1.32-.1 2.66-.14 4-.14a60.075 60.075 0 0112 1.2zM259.6 47.47l-13.89 14.14-11.42-11.22 13.96-14.21a61.011 61.011 0 016.18 5.39 59.159 59.159 0 015.17 5.9z"
                fill="#cb84d3"
            />
            <Path d="M136 136h16v16h-16z" fill="#362684"/>
            <Rect fill="#4c3aa3" height={48} rx={8} width={16} x={160} y={152}/>
            <Rect fill="#4c3aa3" height={40} rx={8} width={16} x={312} y={312}/>
            <Path
                d="M236 304h-28.888a8 8 0 01-8-8 8 8 0 018-8H232a8 8 0 006.4-3.2l14.4-19.2A8 8 0 01264 264a8 8 0 011.6 11.2l-16.8 22.4A16 16 0 01236 304z"
                fill="#4c3aa3"
            />
            <Rect
                fill="#4c3aa3"
                height={16}
                rx={8}
                width={46.886}
                x={169.114}
                y={248}
            />
            <Path
                d="M176 104l-.149 31.812 16 .15a24 24 0 0024.224-23.774L216 104z"
                fill="#5f4bbc"
            />
            <Path
                d="M208 104v8a16.019 16.019 0 01-16 16h-16a8 8 0 000 16h16a32.036 32.036 0 0032-32v-8z"
                fill="#4c3aa3"
            />
        </Svg>
    )
}

Aries.defaultProps = {
    height: 120,
    width: 120,
    color: '#FFFFFFFF'
};

Aries.propTypes = {
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    style: PropTypes.object,
    color: PropTypes.string
};

export default Aries
