import React from 'react'
import { useSpring, animated } from '@react-spring/web'
const AnimFeTurbulence = animated('feTurbulence')
const AnimFeDisplacementMap = animated('feDisplacementMap')

function Water() {
  const { freq, factor, scale, opacity } = useSpring({
    reverse: false,
    from: { factor: 30, opacity: 0, scale: 0.9, freq: '0.0, 0.0' },
    to: { factor: 150, opacity: 0.7, scale: 1, freq: '0.0175, 0.0' },
    config: { duration: 3000 },
  })
  const water = (
    <>
      <animated.svg
        style={{ width: '100vw', height: '100vh', scale, opacity }}
        viewBox="-560 0 1600 466"
      >
        <defs>
          <filter id="water">
            <AnimFeTurbulence
              type="fractalNoise"
              baseFrequency={freq}
              numOctaves="2"
              result="TURB"
              seed="8"
            />
            <AnimFeDisplacementMap
              xChannelSelector="R"
              yChannelSelector="G"
              in="SourceGraphic"
              in2="TURB"
              result="DISP"
              scale={factor}
            />
          </filter>
        </defs>
        <g filter="url(#water)">
          <path
            fill="#203843"
            d="M340.337,195.207l-6.721-2.474l2.117-3.216c11.6-17.171,17.731-37.245,17.731-58.053
    c0-32.506-14.799-62.527-40.603-82.366l-2.179-1.675l4.857-4.883l1.589,1.008c27.54,21.175,43.335,53.219,43.335,87.916
    c0,22.21-6.546,43.639-18.931,61.971L340.337,195.207z"
          />
          <path
            fill="#203843"
            d="M340.313,102.319c-0.036-0.049-0.074-0.097-0.114-0.144l-41.148-48.222l10.905-10.649l30.089-29.385
    c0.867-0.848,1.002-2.196,0.318-3.198s-1.987-1.368-3.094-0.869l-46.062,20.795l-18.53,8.366c-1.57-2.648-4.834-7.053-10.713-10.618
    c-0.104-0.063-0.213-0.125-0.32-0.188c6.61,0.638,13.222,1.826,19.289,3.673l8.781-4.333l-7-2.25
    c-10.441-3.181-22.068-4.666-33.084-4.666c-61.113,0-110.833,49.72-110.833,110.833c0,61.114,49.72,110.834,110.833,110.834
    c32.891,0,63.875-14.476,85.01-39.715l1.933-2.42l2.157-2.605l-6.686-2.277c-10.041-3.572-19.52-7.094-28.439-10.56
    c-22.908-10.777-36.884-24.111-41.682-39.269c-5.451-17.228,3.022-32.641,6.564-38.035c16.015,12.975,41.774,25.83,50.414,26.046
    c0.697,0.018,1.382,0.026,2.054,0.026c12.582,0,20.556-3.061,23.716-9.109C349.535,115.07,340.692,102.835,340.313,102.319z
     M249.631,235.299c-35.059,0-66.11-17.468-84.92-44.154c17.342,13.773,43.428,20.677,78.059,20.675
    c23.67-0.001,51.348-3.235,82.921-9.69C306.056,223.268,278.64,235.299,249.631,235.299z M213.352,204.796
    c-25.145-3.745-43.623-12.786-54.926-26.87c-1.881-2.344-3.52-4.783-4.951-7.294c-4.943-12.093-7.677-25.315-7.677-39.167
    c0-3.295,0.161-6.554,0.464-9.772c10.917,37.075,69.445,62.927,174.063,76.917C276.886,207.099,241.007,208.916,213.352,204.796z
     M309.38,192.022c-48.899-7.208-87.12-17.246-113.824-29.919c-25.222-11.97-40.269-26.295-44.724-42.581
    c-1.577-5.767-1.735-11.507-0.899-17.086c2.38-8.163,5.737-15.912,9.937-23.114c-0.109,1.12-0.185,2.251-0.187,3.404
    c-0.054,33.487,47.056,68.785,140.125,105.091C302.846,189.265,306.037,190.666,309.38,192.022z M340.24,122.065
    c-2.339,4.477-9.685,6.688-21.213,6.4c-8.032-0.201-34.807-14.353-49.333-26.458c-0.05-0.047-0.092-0.101-0.146-0.145
    c-0.036-0.029-0.076-0.047-0.113-0.074c-5.464-4.59-9.136-8.871-9.308-11.964c-0.254-4.598,0.475-6.538,0.971-7.311
    c0.055-0.12,0.115-0.236,0.176-0.351c-0.59-2.717-3.146-2.917-3.807-2.923c-0.078,0.044-0.158,0.086-0.24,0.126
    c-1.674,2.203-2.369,5.724-2.092,10.737c0.225,4.024,3.939,8.955,9.515,14.03c-3.835,5.591-13.807,22.78-7.511,42.771
    c3.117,9.895,9.704,18.869,19.692,26.888c-91.251-39.232-112.176-70.77-112.149-91.048c0.01-6.995,2.465-13.345,6.307-19.004
    c17.662-20.481,43.172-34.008,71.811-35.878c15.885,0.891,22.893,9.263,25.343,13.257c0.001,0.001,0.002,0.003,0.003,0.004
    c-0.002,0.001-0.004,0.002-0.006,0.003l2.243,4.422l22.883-10.343l33.155-14.968l-19.958,19.491L293.885,52.01
    c-0.94,0.919-1.009,2.411-0.154,3.411l42.604,49.928C338.429,108.236,343.068,116.65,340.24,122.065z"
          />
          <path
            fill="#203843"
            d="M292.04,66.668c-9.42-9.681-19.12-7.544-19.664-7.415c8.358,1.292,15.021,7.253,15.021,7.253
    c-0.73,0.536-1.474,1.303-1.843,2.35c-0.511,1.446-0.205,3.041,0.907,4.74c0.07,0.107,0.161,0.189,0.26,0.259
    c-0.681-2.228,0.061-4.945,2.222-6.094c0.071-0.038,0.147-0.069,0.222-0.104c0.094-0.043,0.186-0.088,0.284-0.126
    c0.065-0.025,0.137-0.044,0.204-0.066c0.115-0.038,0.229-0.078,0.35-0.107c0.381-0.094,0.791-0.149,1.233-0.155
    c0.103-0.005,0.2-0.019,0.307-0.019c0.293,0,0.567,0.027,0.834,0.066C292.309,67.039,292.205,66.838,292.04,66.668z"
          />
          <g>
            <path
              fill="#203843"
              d="M13.798,363.001H25v-69.03H13.798v-1.412h32.497v1.412H35.093v69.03h17.964
      c5.92,0,10.562-1.85,13.927-5.551c3.363-3.699,5.819-8.745,7.367-15.138h1.11v22.102H13.798V363.001z"
            />
            <path
              fill="#203843"
              d="M83.231,363.001h11.202v-69.03H83.231v-1.412h32.497v1.412h-11.202v69.03h11.202v1.413H83.231V363.001z"
            />
            <path
              fill="#203843"
              d="M186.775,364.414h-1.514c-0.472-0.538-1.009-1.025-1.614-1.463s-1.549-0.656-2.826-0.656
      c-1.009,0-2.104,0.186-3.28,0.555c-1.178,0.371-2.522,0.792-4.036,1.262s-3.214,0.891-5.097,1.262
      c-1.885,0.369-3.971,0.555-6.257,0.555c-4.239,0-8.361-0.774-12.363-2.321c-4.004-1.547-7.788-4.069-11.354-7.568
      c-3.298-3.296-6.056-7.199-8.275-11.707c-2.221-4.507-3.331-9.722-3.331-15.644c0-5.046,0.909-9.855,2.726-14.432
      c1.816-4.574,4.339-8.611,7.568-12.11c3.229-3.497,7.03-6.272,11.404-8.326c4.373-2.051,9.149-3.078,14.331-3.078
      c2.085,0,3.936,0.202,5.551,0.605c1.614,0.404,3.061,0.858,4.34,1.363c1.277,0.504,2.455,0.958,3.532,1.362
      c1.075,0.403,2.119,0.605,3.128,0.605c1.346,0,2.304-0.218,2.877-0.656c0.57-0.437,1.093-0.924,1.563-1.463h1.515v20.184h-1.11
      c-0.605-2.556-1.38-5.079-2.321-7.569c-0.943-2.488-2.255-4.692-3.937-6.609c-1.682-1.918-3.818-3.465-6.408-4.643
      c-2.591-1.177-5.803-1.767-9.638-1.767c-3.567,0-6.628,0.556-9.184,1.665c-2.558,1.11-4.711,2.591-6.459,4.44
      c-1.751,1.852-3.146,4.004-4.188,6.459c-1.044,2.457-1.834,5.047-2.372,7.771c-0.539,2.725-0.893,5.484-1.06,8.275
      c-0.169,2.793-0.252,5.434-0.252,7.922c0,7.065,0.57,12.918,1.716,17.561c1.143,4.643,2.74,8.311,4.794,11.001
      c2.051,2.691,4.523,4.576,7.417,5.651c2.893,1.077,6.089,1.614,9.588,1.614c4.507,0,8.14-0.639,10.899-1.917
      c2.758-1.277,4.979-2.942,6.661-4.996c1.681-2.051,2.959-4.372,3.835-6.963c0.873-2.59,1.647-5.163,2.321-7.721h1.109V364.414z"
            />
            <path
              fill="#203843"
              d="M198.783,328.385c0-5.382,1.06-10.359,3.18-14.936c2.119-4.575,4.844-8.544,8.174-11.909
      c3.331-3.363,7.081-6.005,11.253-7.922c4.171-1.918,8.342-2.877,12.515-2.877c4.44,0,8.763,0.959,12.968,2.877
      c4.204,1.917,7.956,4.559,11.253,7.922c3.296,3.365,5.938,7.334,7.923,11.909c1.983,4.576,2.977,9.554,2.977,14.936
      c0,4.711-0.908,9.32-2.725,13.826c-1.816,4.509-4.307,8.513-7.468,12.01c-3.164,3.499-6.881,6.325-11.152,8.478
      c-4.273,2.152-8.865,3.229-13.775,3.229c-5.046,0-9.724-1.044-14.028-3.128c-4.307-2.085-8.023-4.86-11.151-8.326
      c-3.129-3.465-5.568-7.469-7.317-12.01C199.657,337.922,198.783,333.229,198.783,328.385z M210.39,328.385
      c0,6.056,0.403,11.338,1.211,15.845c0.808,4.509,2.152,8.275,4.037,11.304c1.883,3.027,4.305,5.282,7.266,6.762
      c2.96,1.48,6.627,2.22,11.001,2.22c4.305,0,7.955-0.739,10.95-2.22c2.992-1.479,5.432-3.734,7.316-6.762
      c1.883-3.028,3.229-6.795,4.037-11.304c0.807-4.507,1.211-9.789,1.211-15.845c0-4.642-0.303-9.133-0.908-13.473
      s-1.767-8.208-3.482-11.605c-1.715-3.397-4.104-6.106-7.165-8.124c-3.063-2.019-7.049-3.028-11.959-3.028
      c-4.912,0-8.898,1.01-11.959,3.028c-3.063,2.018-5.45,4.727-7.166,8.124s-2.876,7.266-3.481,11.605S210.39,323.743,210.39,328.385z
      "
            />
            <path
              fill="#203843"
              d="M278.913,363.001h11.202v-69.03h-11.202v-1.412h19.176c0.807,0,1.614-0.017,2.422-0.051
      c0.808-0.033,1.614-0.084,2.422-0.151c0.808,0,1.614-0.016,2.422-0.051c0.808-0.033,1.615-0.05,2.422-0.05
      c3.97,0,7.469,0.219,10.496,0.655c3.027,0.438,5.854,1.7,8.478,3.785c2.354,1.816,4.02,3.869,4.995,6.156
      c0.975,2.288,1.464,4.44,1.464,6.459c0,1.009-0.187,2.305-0.555,3.885c-0.371,1.582-1.179,3.196-2.423,4.845
      c-1.245,1.649-3.045,3.163-5.399,4.541c-2.355,1.38-5.484,2.306-9.385,2.775v0.202c1.075,0.136,2.538,0.388,4.39,0.757
      c1.85,0.37,3.734,0.993,5.651,1.867c1.918,0.875,3.684,2.035,5.299,3.481c1.614,1.447,2.758,3.314,3.431,5.602
      c0.404,1.347,0.689,2.876,0.858,4.592c0.167,1.716,0.303,3.481,0.403,5.298c0.102,1.816,0.202,3.567,0.303,5.248
      c0.102,1.683,0.285,3.096,0.556,4.239c0.403,1.75,1.042,3.33,1.917,4.743c0.874,1.413,2.286,2.119,4.239,2.119
      c0.873,0,1.781-0.167,2.725-0.505c0.941-0.336,1.781-0.873,2.522-1.614l0.908,1.109c-0.337,0.271-0.724,0.556-1.16,0.858
      c-0.438,0.303-0.993,0.59-1.665,0.857c-0.674,0.269-1.498,0.487-2.473,0.656c-0.977,0.167-2.17,0.252-3.583,0.252
      c-2.691,0-4.929-0.337-6.711-1.009c-1.783-0.672-3.214-1.665-4.289-2.978c-1.077-1.312-1.867-2.927-2.372-4.844
      c-0.504-1.918-0.857-4.153-1.06-6.711l-0.706-9.185c-0.27-3.363-0.943-5.987-2.019-7.871c-1.077-1.883-2.339-3.263-3.784-4.139
      c-1.448-0.873-2.944-1.396-4.491-1.563c-1.549-0.168-2.894-0.253-4.037-0.253h-10.092v36.433h11.202v1.413h-32.497V363.001z
       M300.208,325.155h9.284c1.883,0,3.599-0.234,5.147-0.706c1.547-0.47,2.876-1.295,3.986-2.473c1.11-1.176,1.968-2.775,2.573-4.794
      s0.908-4.574,0.908-7.67c0-3.497-0.454-6.308-1.362-8.427s-2.086-3.717-3.532-4.794c-1.447-1.075-3.063-1.781-4.844-2.119
      c-1.784-0.336-3.55-0.505-5.299-0.505c-1.211,0-2.439,0.018-3.684,0.051c-1.246,0.035-2.306,0.118-3.179,0.252V325.155z"
            />
            <path
              fill="#203843"
              d="M350.868,363.001h11.202v-69.03h-11.202v-1.412h21.598l34.111,55.002h0.201v-53.59h-11.202v-1.412h23.919
      v1.412h-11.202v71.856h-2.019l-42.488-67.719h-0.202v64.893h11.203v1.413h-23.919V363.001z"
            />
            <path
              fill="#203843"
              d="M424.64,363.001h11.202v-69.03H424.64v-1.412h57.728v17.459h-1.11c-0.875-2.624-1.816-4.928-2.826-6.913
      c-1.009-1.983-2.22-3.666-3.633-5.046c-1.413-1.378-3.096-2.405-5.046-3.078c-1.952-0.672-4.307-1.01-7.064-1.01h-16.753v31.185
      h6.56c2.221,0,4.104-0.201,5.651-0.605c1.547-0.403,2.877-1.16,3.986-2.271c1.11-1.11,2.052-2.624,2.826-4.541
      c0.772-1.918,1.529-4.391,2.271-7.418h1.11v31.387h-1.11c-0.472-1.951-0.959-3.835-1.463-5.651
      c-0.505-1.817-1.211-3.432-2.12-4.845c-0.908-1.413-2.119-2.539-3.633-3.381c-1.514-0.841-3.481-1.262-5.903-1.262h-8.175v36.433
      h19.074c3.699,0,6.777-0.79,9.234-2.371c2.455-1.58,4.456-3.465,6.004-5.652c1.547-2.186,2.69-4.456,3.432-6.812
      c0.739-2.354,1.211-4.306,1.413-5.854h1.11v22.102H424.64V363.001z"
            />
          </g>
        </g>
      </animated.svg>
    </>
  )
  return <>{water}</>
}

export default Water
