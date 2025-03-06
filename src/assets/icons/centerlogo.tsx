export const CenterLogo = () =>{
    return (
        <svg xmlns='http://www.w3.org/2000/svg' width='208' height='233' viewBox='0 0 208 233' fill='none'>
            {/*<foreignObject x='-7.3' y='-7.3' width='222.6' height='247.6'>*/}
            {/*    <div*/}
            {/*        style={{*/}
            {/*            backdropFilter: 'blur(3.65px)',*/}
            {/*            clipPath: 'url(#bgblur_0_2013_111_clip_path)',*/}
            {/*            height: '100%',*/}
            {/*            width: '100%'*/}
            {/*        }}*/}
            {/*    ></div>*/}
            {/*</foreignObject>*/}
            <rect
                data-figma-bg-blur-radius='7.3'
                x='3'
                y='3'
                width='202'
                height='227'
                rx='35'
                fill='white'
                fillOpacity='0.25'
                stroke='url(#paint0_linear_2013_111)'
                strokeWidth='6'
            />
            <rect x='5.5' y='5.5' width='197' height='222' rx='32.5' stroke='url(#paint1_linear_2013_111)'/>
            <g filter='url(#filter1_d_2013_111)'>
                <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M87.505 155H56.4289C51.6812 154.789 44.3546 150.813 53.03 136.603C61.7054 122.393 76.8226 96.0037 83.2968 84.585C85.0115 81.9529 88.1249 78.763 91.7132 78.1172C94.8993 77.5439 98.4598 78.9761 101.748 84.585L105.419 90.9388C108.501 96.2726 108.472 102.853 105.343 108.159L99.368 118.291L91.7132 105.043L75.0422 133.431C73.2079 136.392 70.6398 143.074 75.0422 146.119C79.4447 149.164 85.1851 153.308 87.505 155ZM113.599 125.568C110.47 130.874 110.44 137.454 113.522 142.788L116.774 148.415C120.062 154.024 123.622 155.456 126.808 154.883C130.397 154.237 133.51 151.047 135.225 148.415C141.699 136.996 156.816 110.607 165.492 96.3967C174.167 82.1868 166.841 78.2115 162.093 78L131.017 78C133.337 79.6917 139.077 83.8362 143.48 86.8812C147.882 89.9262 145.314 96.6082 143.48 99.5686L126.808 127.957L119.574 115.436L113.599 125.568Z'
                    fill='white'
                />
            </g>
            <defs>
                <clipPath id='bgblur_0_2013_111_clip_path'>
                    <rect transform='translate(7.3 7.3)' x='3' y='3' width='202' height='227' rx='35'/>
                </clipPath>
                <filter id='filter1_d_2013_111' x='19' y='48' width='180.522' height='137' filterUnits='userSpaceOnUse'
                        colorInterpolationFilters='sRGB'>
                    <feFlood floodOpacity='0' result='BackgroundImageFix'/>
                    <feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                                   result='hardAlpha'/>
                    <feOffset/>
                    <feGaussianBlur stdDeviation='15'/>
                    <feComposite in2='hardAlpha' operator='out'/>
                    <feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0'/>
                    <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_2013_111'/>
                    <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_2013_111' result='shape'/>
                </filter>
                <linearGradient id='paint0_linear_2013_111' x1='-20.5' y1='227' x2='202' y2='21'
                                gradientUnits='userSpaceOnUse'>
                    <stop stopColor='white' stopOpacity='0.8'/>
                    <stop offset='0.468151' stopColor='white' stopOpacity='0'/>
                </linearGradient>
                <linearGradient id='paint1_linear_2013_111' x1='-20.5' y1='227' x2='202' y2='21'
                                gradientUnits='userSpaceOnUse'>
                    <stop offset='0.545' stopColor='white' stopOpacity='0'/>
                    <stop offset='1' stopColor='white' stopOpacity='0.8'/>
                </linearGradient>
            </defs>
        </svg>
    );
};
