import KUTE from 'kute.js'
export function Blob(){
    
    const morph = KUTE.fromTo('#blob1',{
            path: '#blob1'
        },
        {
            path:'#blob2'
        },
        {
            repeat: 1000,
            durration: 2000,
            yoyo: true,
        }
        )
    morph.start();
    return (<>
        <svg id="visual" 
        viewBox="0 0 900 600" 
        width="900" 
        height="600"
        xmlns="http://www.w3.org/2000/svg" 
        version="1.1">
            <g transform="translate(442.7318384082796 305.4089838448461)">
                <path id='blob1' d="M190.6 -169.8C239.8 -141.4 267.4 -70.7 253 -14.4C238.6 42 182.2 83.9 133.1 108.9C83.9 133.9 42 142 -13.8 155.8C-69.5 169.5 -139.1 189.1 -183.2 164.1C-227.4 139.1 -246.2 69.5 -241.6 4.6C-237 -60.3 -209 -120.7 -164.8 -149C-120.7 -177.3 -60.3 -173.7 5.2 -178.9C70.7 -184 141.4 -198.1 190.6 -169.8" fill="#8A2A23">
                    </path>
            </g>
            <g transform="translate(439.4936862564682 307.30415767569326)">
                <path id='blob2' d="M100.5 -113.2C130.4 -70.7 154.7 -35.4 172.4 17.7C190 70.7 201.1 141.4 171.3 172.9C141.4 204.4 70.7 196.7 6.8 189.9C-57 183 -114.1 177.1 -142.7 145.6C-171.4 114.1 -171.7 57 -165.7 6C-159.7 -45 -147.4 -90 -118.7 -132.5C-90 -175 -45 -215 -4.8 -210.2C35.4 -205.4 70.7 -155.7 100.5 -113.2" fill="#8A2A23">
                    </path>
                    </g>
        </svg>

        </>
    )
}