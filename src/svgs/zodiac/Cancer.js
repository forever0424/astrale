import * as React from "react"
import Svg, {Circle, Path} from "react-native-svg"
import PropTypes from "prop-types";

function Cancer({color, height, width, style}) {
    return (
        <Svg height={height} width={width} viewBox="0 0 512 512" style={style}>
            <Circle cx={256} cy={256} r={256} fill="#ffe047"/>
            <Path
                d="M512 256c0-33.013-6.252-64.564-17.632-93.54L445.2 109.805c-7.635-8.983-16.6-15.511-25.823-18.805l3.23 66.258-46.627-51.006c-9.651 15.676-11.452 39.692-3.06 63.573a98.167 98.167 0 002.774 7.003 32.065 32.065 0 00-2.223-.086c-1.22 0-2.422.076-3.606.21l-39.889-55.816c-5.641-8.766-15.485-14.573-26.684-14.573-17.512 0-31.709 14.196-31.709 31.708 0 13.638 8.611 25.262 20.691 29.739v11.698a31.58 31.58 0 00-13.392-2.966l-44.647-57.277c-5.774-7.825-15.06-12.901-25.531-12.901-17.512 0-31.708 14.196-31.708 31.708 0 4.576.97 8.926 2.715 12.855l-43.692-44.875-13.465 18.575L92.622 91c-17.336 6.191-33.767 23.8-42.16 47.68-11.547 32.856-3.797 65.965 17.149 77.257-2.707 35.428 4.8 61.707 22.348 78.144 6.147 5.758 12.888 9.663 19.522 12.306 3.358 8.026 7.872 14.956 13.529 20.771-13.976 3.002-31.043 6.826-35.704 8.553-11.031 4.086-26.222 25.718-33.743 39.26l91.362 111.74C178.523 502.917 216.2 512 256 512c141.385 0 256-114.615 256-256z"
                fill="#ffcf00"
            />
            <Path
                d="M424.694 335.712c-5.751-2.131-30.386-7.454-44.8-10.487a125.35 125.35 0 005.693-14.404c11.117-1.553 24.847-5.868 36.454-16.74 17.548-16.437 25.055-42.716 22.348-78.144 20.945-11.291 28.696-44.4 17.149-77.257-8.393-23.881-24.824-41.489-42.16-47.68l3.926 80.536-47.323-65.284c-9.651 15.676-11.452 39.692-3.06 63.573 9.863 28.063 30.824 47.45 51.312 49.839 1.794 27.819-3.617 47.838-16.118 59.548-5.396 5.055-11.654 8.027-17.601 9.754a123.65 123.65 0 001.061-16.106c0-50.548-31.541-73.315-77.263-82.078v-22.771c12.08-4.477 20.691-16.101 20.691-29.739 0-17.512-14.197-31.708-31.708-31.708-17.512 0-31.708 14.196-31.708 31.708 0 13.638 8.611 25.262 20.691 29.739v19.672c-11.542-1.111-23.702-1.584-36.27-1.584h-.014c-12.568 0-24.728.473-36.27 1.584v-19.672c12.08-4.477 20.691-16.101 20.691-29.739 0-17.512-14.196-31.708-31.709-31.708-17.512 0-31.708 14.196-31.708 31.708 0 13.638 8.611 25.262 20.691 29.739v22.771c-45.723 8.764-77.263 31.53-77.263 82.078 0 5.486.371 10.855 1.06 16.106-5.947-1.726-12.205-4.699-17.601-9.754-12.501-11.71-17.912-31.729-16.118-59.548 20.489-2.389 41.45-21.777 51.312-49.839 8.393-23.881 6.591-47.897-3.059-63.573l-47.323 65.284L92.622 91c-17.337 6.191-33.767 23.8-42.16 47.68-11.548 32.856-3.797 65.965 17.149 77.257-2.707 35.428 4.8 61.707 22.348 78.144 11.606 10.872 25.336 15.187 36.454 16.74a125.528 125.528 0 005.692 14.404c-14.414 3.033-39.048 8.356-44.799 10.486-11.031 4.086-26.222 25.718-33.743 39.26l14.382 7.986c9.375-16.883 21.304-30.334 25.076-31.821 4.452-1.649 29.802-7.177 47.385-10.842a137.624 137.624 0 0010.68 14.505c-13.323 5.32-32.163 12.971-36.841 15.532-10.41 5.701-21.877 30.201-27.045 45.279l15.562 5.334c6.364-18.566 15.892-34.08 19.384-36.184 3.963-2.17 25.046-10.727 41.186-17.129a149.34 149.34 0 0014.114 11.581c-8.316 5.35-16.515 10.774-19.381 13.148-9.058 7.503-16.244 32.941-18.863 48.209l16.214 2.782c3.266-19.034 10.077-35.672 13.144-38.322 2.694-2.232 13.509-9.279 24.222-16.092 20.105 11.117 42.193 17.29 63.216 17.29 21.024 0 43.114-6.174 63.22-17.292 10.713 6.813 21.528 13.86 24.22 16.09 3.071 2.653 9.882 19.292 13.148 38.326l16.214-2.782c-2.62-15.267-9.806-40.705-18.863-48.208-2.867-2.375-11.067-7.799-19.383-13.15a149.467 149.467 0 0014.114-11.581c16.14 6.401 37.221 14.958 41.169 17.119 3.51 2.114 13.039 17.628 19.403 36.194l15.562-5.334c-5.168-15.078-16.634-39.578-27.046-45.279-4.678-2.561-23.519-10.212-36.842-15.532a137.633 137.633 0 0010.681-14.505c17.583 3.664 42.934 9.193 47.381 10.841 3.776 1.488 15.706 14.939 25.081 31.822l14.382-7.986c-7.523-13.541-22.714-35.172-33.745-39.258z"
                fill="#ff4f19"
            />
            <Path
                d="M424.694 335.712c-5.751-2.131-30.386-7.454-44.8-10.487a125.35 125.35 0 005.693-14.404c11.117-1.553 24.847-5.868 36.454-16.74 17.548-16.437 25.055-42.716 22.348-78.144 20.945-11.291 28.696-44.4 17.149-77.257-8.393-23.881-24.824-41.489-42.16-47.68l3.926 80.536-47.323-65.284c-9.651 15.676-11.452 39.692-3.06 63.573 9.863 28.063 30.824 47.45 51.312 49.839 1.794 27.819-3.617 47.838-16.118 59.548-5.396 5.055-11.654 8.027-17.601 9.754a123.65 123.65 0 001.061-16.106c0-50.548-31.541-73.315-77.263-82.078v-22.771c12.08-4.477 20.691-16.101 20.691-29.739 0-17.512-14.197-31.708-31.708-31.708-17.512 0-31.709 14.196-31.709 31.708 0 13.638 8.611 25.262 20.691 29.739v19.672c-11.542-1.111-23.702-1.584-36.27-1.584H256v220.13c21.023-.001 43.112-6.175 63.217-17.292 10.713 6.814 21.528 13.86 24.22 16.09 3.072 2.653 9.882 19.292 13.148 38.326l16.214-2.782c-2.62-15.267-9.806-40.705-18.864-48.208-2.866-2.375-11.066-7.799-19.383-13.15a149.34 149.34 0 0014.114-11.581c16.14 6.401 37.221 14.958 41.169 17.119 3.51 2.114 13.039 17.629 19.402 36.194l15.562-5.334c-5.168-15.078-16.634-39.578-27.046-45.279-4.678-2.561-23.519-10.212-36.842-15.532a137.484 137.484 0 0010.68-14.505c17.583 3.664 42.934 9.193 47.381 10.841 3.776 1.488 15.706 14.939 25.081 31.822l14.382-7.986c-7.519-13.543-22.71-35.174-33.741-39.26z"
                fill="#ff3200"
            />
            <Circle cx={208.71} cy={138.27} r={20.563} fill="#fff"/>
            <Circle cx={208.71} cy={138.27} r={11.02} fill="#3c3b41"/>
            <Circle cx={303.29} cy={138.27} r={20.563} fill="#fff"/>
            <Circle cx={303.29} cy={138.27} r={11.02} fill="#3c3b41"/>
        </Svg>
    )
}

Cancer.defaultProps = {
    height: 120,
    width: 120,
    color: '#FFFFFFFF'
};

Cancer.propTypes = {
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    style: PropTypes.object,
    color: PropTypes.string
};

export default Cancer
